/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this.pushTowardLeft(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.stack.length) {
    const cur = this.stack.pop();
    this.pushTowardLeft(cur.right);
    return cur.val;
  }
  return false;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !!this.stack.length;
};
BSTIterator.prototype.pushTowardLeft = function (node) {
  while (node !== null) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
