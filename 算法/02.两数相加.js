/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode }l1 //需要自定义
 * @param {ListNode} l2 //需要自定义
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 创建虚拟头节点
  let dummyHead = new ListNode(-1);
  // 将虚拟头结点赋值给cur之后，这个cur会不断地向后移动
  let cur = dummyHead;
  // 总和
  let sum = 0;
  // 进位
  let carry = 0;
  // 这里使用或运算符, 因为两个链表的长度可能会不一样
  while (l1 || l2) {
    // 首先sum就是两个节点的值添加上进制
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // 进位 很显然 如果sum 大于10 说明进制为1 否则为 0
    carry = sum >= 10 ? 1 : 0
    // 新的链表的下一个节点: 和对10取余
    cur.next = new ListNode(sum % 10);
    // 将cur移动到下一个节点
    cur = cur.next;
    // l1 和 l2 都存在的情况下 也都往后面移动
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  // 如果最后两个数相加完毕之后还有进位
  carry && (cur.next = new ListNode(carry));
  // 最后将新链表的头结点返回出去就行
  return dummyHead.next;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));