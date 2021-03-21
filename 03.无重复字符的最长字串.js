// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/*
var lengthOfLongestSubstring = function(s) {
  let l = 0,
      ss = '';
  for(let j = s.length; j >= 0; j--) {
    for(let i = 0; i <= s.length - j; i++) {
      ss = s.substr(i,j);
      if(!isDuplicate(ss)) {
        l = j;
      }
    }
    if(l === j) {
      return l
    }
  }
};
// function isDuplicate(ss) {
//   for(let i = 0; i < ss.length; i++) {
//     for(let j = i + 1; j < ss.length; j++) {
//       if(ss[i] === ss[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }
// 采用一次循环
function isDuplicate(ss) {
  let sa = '';
  for(let i = 0; i < ss.length; i++) {
    if(sa.indexOf(ss[i]) === -1) {
      sa += ss[i]
    }
  }
  return sa !== ss
}
 */
// 采用滑动窗口
var lengthOfLongestSubstring = function(s) {
  let l = 0,
      win = '',
      j = 0;
  for (let i =  0; i < s.length; i++) {
    j = win.indexOf(s[i]);
    if (j !== -1) {
      win = win.substr(j+1)
    }
    win += s[i];
    l = Math.max(l,win.length);
  }
  return l;
};
console.log(lengthOfLongestSubstring('aaabbbcfcciutree'));