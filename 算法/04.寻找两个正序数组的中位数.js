// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
var findMedianSortedArrays = function(nums1, nums2) {
  let nums3 = [];
  let m = nums1.length;
  let n = nums2.length;
  if (m * n === 0) {
    nums3 = m === 0 ? nums2 : nums1;
    return nums3.length % 2 === 0 ? (nums3[nums3.length/2-1]+nums3[nums3.length/2])/2 : (nums3[(nums3.length+1)/2-1])
  }
  for(let i = 0; i< m + n; i++) {
    let x = nums1.length;
    let y = nums2.length;
    if (x * y === 0) {
      nums3 = nums3.concat(x === 0 ? nums2 : nums1);
      break;
    }
    nums3.push(nums1[0] <= nums2[0] ? nums1.shift() : nums2.shift());
  }
  return nums3.length % 2 === 0 ? (nums3[nums3.length/2-1]+nums3[nums3.length/2])/2 : (nums3[(nums3.length+1)/2-1])
};

console.log(findMedianSortedArrays([1,3], [2,4]));
