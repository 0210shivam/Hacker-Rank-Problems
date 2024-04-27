// Solve the question: so that in an array, elements sum will be counted.
let arr = [12, 4, 5, 6, 8];

const countTheSum = (arr) => {
    // Write function code
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        count += element;
    }

    return count;
};

const result = countTheSum(arr);
console.log(result);
