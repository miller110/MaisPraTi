package tasks;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Task03 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Por favor, digite a quantidade de números da sequência de Fibonacci que deseja calcular: ");
            int n = input.nextInt();

            if (n <= 0) {
                System.out.println("Erro: O número deve ser maior que zero.");
            } else {
                System.out.println("Os primeiros " + n + " números da sequência de Fibonacci são:");
                calculateFibonacci(n);
            }
        } catch (InputMismatchException e) {
            System.out.println("Erro: Entrada inválida. Certifque-se de digitar um número inteiro positivo.");
        }

        input.close();
    }

    public static void calculateFibonacci(int n) {
        int first = 1;
        int second = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(first + (i < n - 1? ", " : "\n"));
            int next = first + second;
            first = second;
            second = next;
        }
    }
}
