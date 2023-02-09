// 二叉树构造函数
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val ?? 0
    this.left = left
    this.right = right
  }
}
// 将数组转化为二叉树
const arrayToTree = (array) => {
  
  let root = null

  if (!array?.length) return root

  const stack = [root = new TreeNode(array.shift())]

  while (stack.length) {
    const node = stack.shift()

    if (!array.length) return root
    const leftVal = array.shift()
    if (leftVal) stack.push(node.left = new TreeNode(leftVal))

 
    if (!array.length) return root
    const rightVal = array.shift()
    if (rightVal) stack.push(node.right = new TreeNode(rightVal))


  }
  return root
}


export {
  arrayToTree
}