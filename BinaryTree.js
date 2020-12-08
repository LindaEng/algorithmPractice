//binary search trees
//nodes on the left are less than node on the right

//different than a binary tree
// a binary tree doesnt follow the rules of nodes less than root on the left and greater on the right

//Binary Search Tree implementation
//1) Implement the Node class to create a BST. the constructor should initialize values 'data', 'left', and 'right'
//2) Implement the 'insert' method for the Node class. Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
//3) Implement the 'contains' method for the Node class. Contains should accept a 'data' argument and return the Node in the tree with the same value. If the value isnt in the tree return null.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    //keep going left or right until its null
    if(data < this.data && this.left) {
      //recursion
       this.left.insert(data)
    } else if (data < this.data) {
      this.left = new Node(data)
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = new Node(data)
    }
  }

  contains(data) {
    //base case
    if(this.data === data) {
      return this
    }

    //recurse right if data is greater left if less
    if(this.data < data && this.right) {
      this.right.contains(data)
    } else if (this.data > data && this.left) {
      this.left.contains(data)
    }

    return null
  }
}
