const nums = [3, 57, -9, 20, 67, 23, 87, 65, 128, -10, 53]
// Create the code that will log the largest number from the array.
let largestNum = 0
for (let i = 0; i <nums.length; i++){
    if(nums[i] < largestNum) {
        largestNum = nums[i]
    }
}
console.log(largestNum)


// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
