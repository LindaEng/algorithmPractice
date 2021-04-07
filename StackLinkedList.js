class Node {
  constructor(value, next = null){
    this.value = value,
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    if(!this.top) return null
    else return this.top
  }
  push(value) {
    if(this.length === 0) {
      this.top = new Node(value)
      this.bottom = new Node(value)
    }else {
      let prevTop = this.top
      this.top = new Node(value)
      this.top.next = prevTop
    }
    this.length++
    return this
  }
  pop() {
    if(!node) return null
    if(this.length === 1){
      this.top = this.bottom = null
    }else{
      let prevTop = this.top
      this.top = prevTop.next
    }
    this.length--
  }
}
