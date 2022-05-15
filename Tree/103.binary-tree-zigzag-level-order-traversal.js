/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const stack = [[root]];
  const res = [];
  let flag = false;
  while (stack.length) {
    const levelRes = [];
    const levelNodes = stack.pop();
    const level = [];
    while (levelNodes.length) {
      const node = levelNodes.pop();
      levelRes.push(node.val);
      if (flag) {
        node.right && level.push(node.right);
        node.left && level.push(node.left);
      } else {
        node.left && level.push(node.left);
        node.right && level.push(node.right);
      }
    }
    levelRes.length && res.push(levelRes);
    level.length && stack.push(level);
    if (flag) {
      flag = false;
    } else {
      flag = true;
    }
  }
  return res;
};
