package tasks;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Task01 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {

            System.out.println("Por favor, digite um número: ");
            int n1 = input.nextInt();

            System.out.println("Por favor, digite outro número: ");
            int n2 = input.nextInt();

            input.nextLine();

            System.out.println("Agora escolha um operador (+, -, *, /): ");
            String operator = input.nextLine();

            switch (operator) {
                case "+":
                    System.out.println("Operação escolhida: Adição");
                    System.out.println(n1 + " + " + n2 + " = " + (n1 + n2));
                    break;
                case "-":
                    System.out.println("Operação escolhida: Subtração");
                    System.out.println(n1 + " - " + n2 + " = " + (n1 - n2));
                    break;
                case "*":
                    System.out.println("Operação escolhida: Multiplicação");
                    System.out.println(n1 + " X " + n2 + " = " + (n1 * n2));
                    break;
                case "/":
                    if (n2 == 0) {
                        System.out.println("Erro: Não é possível dividir por zero.");
                    } else {
                        System.out.println("Operação escolhida: Divisão");
                        System.out.println(n1 + " / " + n2 + " = " + ((double) n1 / n2));
                    }
                    break;
                default:
                    System.out.println("Erro: Operador inválido. Por favor escolha entre (+, -, *, /)");
            }
        } catch (InputMismatchException e) {
            System.out.println("Erro: Entrada inválida. Certifique-se de digitar apenas números inteiros.");
        }

        input.close();
    }
}
