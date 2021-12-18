/**
 * Problem 2.Write program to check if a string is palindrome or not.
 * @Author Fahad Bin Munir
 */

function checkPalindrome(input) {
    let convToStr = input.toString();
    const len = convToStr.length;
    let flag = 0;

    for (let index = 0; index < len / 2; index++) {
        if (convToStr[index] != convToStr[len - 1 - index]) {
            flag = 1;
            break;
        }
    }

    if (flag) {
        console.log(convToStr + " is not a palindrome number");
    } else {
        console.log(convToStr + " is a palindrome number");
    }
}

const input = 121; // input
checkPalindrome(input);
