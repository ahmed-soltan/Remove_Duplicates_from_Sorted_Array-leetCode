var removeDuplicates = function (nums) {
    var k = 0;
    var expectedNums = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        if (expectedNums.indexOf(nums[i]) > -1) {
            continue;
        }
        expectedNums.push(nums[i]);
    }
    k = expectedNums.length;
    for (var i = 0; i < expectedNums.length; i++) {
        nums[i] = expectedNums[i];
    }
    return k;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
