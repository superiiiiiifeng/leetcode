/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
};
console.log(twoSum([3, 7, 4, 15], 7));