import { arrayToTree } from '../../utils/index.js'

// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

  const stack = []
  const result = []
  let node = root

  while ( stack.length || node !== null ) {
    while (node !== null) {
      result.push(node.val)
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    node = node.right
  }
  return result
};

console.log(preorderTraversal(arrayToTree([1, 2, 3, 4, 5, 6, 7, 8, 9])));