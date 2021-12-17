function findCommon(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                commonElements.push(arr1[i]);
            }
        }
    }
    return commonElements;
}

const arr1 = [2, 3, 4, 5, 6];
const arr2 = [4, 6, 7, 8, 9];

const commonValue = findCommon(arr1, arr2);

console.log("common elements are ", commonValue);
