class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    if(!this.first) return null
    else return this.first
  }
  enqueue(value) {
    let currentNode = this.first
    if(!currentNode){
      this.first = this.last = new Node(value)
    }else {
      let prevLast = this.last
      prevLast.next = new Node(value)
      this.last = prevLast.next
    }
    this.length++
    return this
  }
  dequeue() {
    let prevFirst = this.first
    if(!prevFirst) return null
    if(this.first === this.last){
      this.first = this.last = null
    }
    else {
      this.first = prevFirst.next
      prevFirst.next = null
    }
    this.length--
    return this
  }
}
