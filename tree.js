const { func } = require("prop-types");

 class Node {
  constructor(data) {
    this.data = data,
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    })
  }
 }


 class Tree {
  constructor() {
    this.root = null
  }

  traverseByBF(func) {
    let arr = [this.root]
    while(arr.length) {
      let node = arr.shift()
      //take children and append to the back of arr
      arr.push(...node.children)
      func(node)
    }
  }

  traverseByDF(func) {
    let arr = [this.root]
    while(arr.length) {
      let node = arr.shift()
      arr.unshift(...node.children)
      func(node)
    }
  }
 }
