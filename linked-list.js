// node implementation
class Node {
  constructor(data, next = null){
    this.data = data,
    this.next = next
  }
}

//Linked List Constructor
class LinkedList {
  constructor(){
    this.head = null
  }


//Linked list Insert first
  insertFirst(data) {
    if(!this.head){
      this.head = new Node(data)
    } else {
      let oldHead = this.head
      this.head = new Node(data, oldHead)
    }
  }

//get size
  getSize(){
    let counter = 0
    let node = this.head

    while(node){
      counter++
      node = node.next
    }

    return counter
  }

//get first
  getFirst() {
    (this.head) ? this.head : null
  }

//get Last
  getLast() {
    let node = this.head
    if(!this.head) return null
    while(node){
      if(!node.next){
        return node
      }
      node = node.next
    }
  }

//clear the list
  clear(){
    this.head = null
  }

//remove head
  removeHead(){
    if(!this.head) return null
    this.head = this.head.next
  }

//remove tail
  removeTail(){
    let previous = this.head
    let node = this.head.next
    while(node){
      previous = node
      node = node.next
    }
    previous.next = null
  }

//Insert last
  insertLast(data){
    let node = this.getLast()
    if(node){
      node.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

//get At
  getAt(n){
    let counter = 0
    let node = this.head
    if(!this.head) return null
    if(n === 0) return this.head
    while(node){
      if(counter === n) return node
      node = node.next
      counter++
    }
    return null
  }

  //remove at
    removeAt(n){
      if(!this.head){
        return null
      }
      if(n === 0){
        this.head = null
      }
      else{
        const previous = this.getAt(n-1) || this.getLast();
        const node = this.getAt(n)
        previous.next = node.next
      }
    }

//Insert at
    insertAt(data, n){
      if(!this.head){
        this.head = new Node(data)
        return
      }
      if(n === 0){
        this.head = new Node(data, this.head)
        return
      }
      const previous = this.getAt(n-1) || this.getLast()
      const node = new Node(data, previous.next)
      previous.next = node
    }

}



function midpoint(list) {
  let slow = this.head
  let fast = this.head
  if(fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function isCircular(list) {
  let slow = list.getFirst()
  let fast = list.getFirst()
  while(fast.next && fast.next.next){
    slow = slow.next
    fast = fast.next.next
    if(fast === slow) return true
  }
  return false
}

function fromLast(list, n) {
  let slow = list.head
  let fast = list.head
  while(n > 0){
    fast = fast.next
    n--
  }
  while(fast.next) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}
