package tasks;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Task07 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Por favor, digite uma frase: ");
            String sentence = input.nextLine();

            String[] words = sentence.split("\\s+");

            int wordCount = words.length;

            System.out.println("A frase contém " + wordCount + " palavras");
        } catch (InputMismatchException e) {
            System.out.println("Erro: Entrada inválida. Certifique-se de digitar uma frase válida.");
        }
    }
}
