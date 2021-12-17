

const input = 7645121;
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
