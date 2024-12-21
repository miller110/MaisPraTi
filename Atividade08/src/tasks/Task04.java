package tasks;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Task04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Por favor, digite um número inteiro: ");
            int n = input.nextInt();

            System.out.println("O número invertido é: " + invertNumber(n));
        } catch (InputMismatchException e) {
            System.out.println("Erro: Entrada inválida. Certifique-se de digitar apenas números inteiros.");
        }

        input.close();

    }

    public static int invertNumber(int n) {
        int inverted = 0;

        while (n != 0) {
            int lastDigit = n % 10;
            inverted = inverted * 10 + lastDigit;
            n /= 10;
        }

        return inverted;
    }
}
