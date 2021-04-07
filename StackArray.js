

class Stack {
  constructor(){
    this.array = []
  }

  peek(){
    if(this.array.length < 0) return null
    else return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    return this
  }
  pop() {
    this.array.pop()
    return this
  }

}
