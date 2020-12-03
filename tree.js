

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
      //take children and preppend to front
      arr.unshift(...node.children)
      func(node)
    }
  }
  //level width of tree
  levelWidth(root){
    const arr = [root, 's']
    const counters = [0]

    //while there are nodes
    while(arr.length > 1) {
      const node = arr.shift()
      //if we've reached the width
      if(node === 's') {
        //enter new width
        counters.push(0)
        //put string back to the end
        arr.push('s')
      } else {
        //node has children
        arr.push(...node.children)
        //increment the furthest width value
        counters[counters.length - 1]++
      }
    }
    return counters;
  }
 }
