package tasks;

import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class Task06 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Random random = new Random();

        int secretNumber = random.nextInt(50) + 1;
        int userGuess = 0;

        try {
            System.out.println("Bem-vindo(a) ao jogo de adivinhação!");
            System.out.println("O programa escolheu um número entre 1 e 50.");
            System.out.println("Tente advinhar qual é o número!");

            while (userGuess != secretNumber) {
                System.out.print("Digite seu palpite: ");
                userGuess = input.nextInt();

                if (userGuess == secretNumber) {
                    System.out.println("Parabéns! Você adivinhou o número!");
                } else {
                    System.out.println("Errado! Tente novamente.");
                }
            }
        } catch (InputMismatchException e) {
            System.out.println("Erro: Entrada inválida. Certifique-se de digitar um número inteiro");
        }

        input.close();
    }
}
