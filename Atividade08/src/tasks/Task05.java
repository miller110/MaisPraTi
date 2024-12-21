package tasks;

import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Arrays;

public class Task05 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Por favor, digite a primeira palavra: ");
            String word = input.nextLine().toLowerCase();

            if (containsNumber(word)){
                throw new InputMismatchException("Erro: Entrada inválida. Não digite números");
            }

            System.out.println("Por favor, digite a segunda palavra: ");
            String word2 = input.nextLine().toLowerCase();

            if (containsNumber(word2)){
                throw new InputMismatchException("Erro: Entrada inválida. Não digite números");
            }

            if (areAnagrams(word, word2)){
                System.out.println("As palavras " + word + " e " + word2 + " são anagramas");
            } else {
                System.out.println("As palavras " + word + " e " + word2 + " não são anagramas");
            }
        } catch (InputMismatchException e) {
            System.out.println(e.getMessage());
        }

        input.close();
    }

    public static boolean containsNumber(String word) {
        for (char c: word.toCharArray()){
            if (Character.isDigit(c)){
                return true;
            }
        }
        return false;
    }

    public static boolean areAnagrams(String word, String word2) {
        if (word.length() != word2.length()){
            return false;
        }

        char[] arr = word.toCharArray();
        char[] arr2 = word2.toCharArray();
        
        char[] sortedArr = Arrays.copyOf(arr, arr.length);
        char[] sortedArr2 = Arrays.copyOf(arr2, arr2.length);

        Arrays.sort(sortedArr);
        Arrays.sort(sortedArr2);

        return Arrays.equals(sortedArr, sortedArr2);
    }
}
