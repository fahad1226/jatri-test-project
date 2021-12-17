

const removeDuplicate = (arr) => [...new Set(arr)];

const removedValue = removeDuplicate([1, 2, 3, 3, 4, 4, 5]);

console.log(removedValue);
