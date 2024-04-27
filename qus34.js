// Calculate the absolute difference of the sum of the diagonal of an array.
//  Learn time - 02:06, Solve time - 27:02, Total time = 29:08

let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

const absoluteDiff = (arr) => {
    // write code here
    let LtoFsum = 0;
    let RToLsum = 0;
    for (let i = 0; i < arr.length; i++) {
        LtoFsum += arr[i][i];
        RToLsum += arr[i][arr.length - (i + 1)];
    }

    let absDiff = Math.abs(LtoFsum - RToLsum);
    return absDiff;
};

const result = absoluteDiff(arr);
console.log(result);
