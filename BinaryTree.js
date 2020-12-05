//binary search trees
//nodes on the left are less than node on the right

//different than a binary tree
// a binary tree doesnt follow the rules of nodes less than root on the left and greater on the right

//Binary Search Tree implementation
//1) Implement the Node class to create a BST. the constructor should initialize values 'data', 'left', and 'right'
//2) Implement the 'insert' method for the Node class. Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
  }
}
