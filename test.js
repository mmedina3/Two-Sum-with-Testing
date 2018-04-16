//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.



var twoSum = function(nums, target) {
	var firstIndex = 0;
	var secondIndex =1;
	console.log('test1');
	console.log(nums.length);
	while(secondIndex <= (nums.length - 1)){
		console.log('test2');
		if(nums[firstIndex] + nums[secondIndex] === target){
			return [firstIndex, secondIndex];
		}else{
			secondIndex++;
		}
	}
    console.log('test3');
};


describe('leet code twoSum', function() {
    it('simpleOne', function() {
        var target = 2;
        var nums = [1, 1];
        var answer= twoSum(nums, target);
        expect(answer).toEqual([0, 1]);
    });
});

describe('leet code twoSum', function() {
    it('simpleTwo', function() {
        var target = 2;
        var nums = [1,0,0,1];
        var answer= twoSum(nums, target);
        expect(answer).toEqual([0, 3]);
    });
});

describe('leet code twoSum', function() {
    it('simpleThree', function() {
        var target = 9;
        var nums = [2,7,11,15];
        var answer= twoSum(nums, target);
        expect(answer).toEqual([0, 1]);
    });
});