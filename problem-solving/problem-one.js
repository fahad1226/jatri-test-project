/**
 * Problem 1. Write a program to swap two variables without using the 3rd variable.
 * @Author Fahad Bin Munir
 *
 * @let a = 10, @let b = 20
 * a = 10 + 20 -> 30
 * b = 30 - 20 -> 10
 * a = 30 - 10 -> 20
 */

function swap(variable_1, variable_2) {
    console.log("Before doing swap ", variable_1, variable_2);

    variable_1 = variable_1 + variable_2;
    variable_2 = variable_1 - variable_2;
    variable_1 = variable_1 - variable_2;

    console.log("after doing swap ", variable_1, variable_2);
}

let variable_1 = 10;
let variable_2 = 20;

swap(variable_1, variable_2);
