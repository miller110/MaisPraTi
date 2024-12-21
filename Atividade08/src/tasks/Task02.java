package tasks;

import java.util.Scanner;

public class Task02 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Por favor, digite uma palavra: ");
            String word = input.nextLine();

            if (!word.matches("[a-zA-Z]+")){
                throw new IllegalArgumentException("Entrada inválida. Apenas palavras compostas por letras são permitidas.");
            }

            String cleanedWord = word.replaceAll("\\s+", "").toLowerCase();
            String reverseWord = new StringBuilder(cleanedWord).reverse().toString();

            if (cleanedWord.equals(reverseWord)) {
                System.out.println("A palavra " + word + " é um palíndromo");
            } else {
                System.out.println("A palavra " + word + " não é um palíndromo");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        input.close();
    }
}
