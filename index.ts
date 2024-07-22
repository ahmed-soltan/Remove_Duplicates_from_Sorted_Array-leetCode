
var removeDuplicates = (nums:number[]) =>{
    let k = 0;
    const expectedNums:any[] =[nums[0]];

    for(let i = 1; i < nums.length; i++){
        if(expectedNums.indexOf(nums[i])>-1){
            continue;
        }
        expectedNums.push(nums[i]);
    }

    k=expectedNums.length;

    for (let i = 0; i < expectedNums.length; i++) {
        nums[i] = expectedNums[i];
    }

    return k

}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))