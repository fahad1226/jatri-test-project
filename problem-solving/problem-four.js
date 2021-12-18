/**
 * Problem 4. Write a one line code to remove duplicates from the following array.
 * @array [1, 2, 3, 3, 4, 4, 5]
 * @Author Fahad Bin Munir
 */

const removeDuplicate = (arr) => [...new Set(arr)];

const removedValue = removeDuplicate([1, 2, 3, 3, 4, 4, 5]);

console.log(removedValue);
