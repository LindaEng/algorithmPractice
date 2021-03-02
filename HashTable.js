class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = ( hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(input, value) {
    let key = this._hash(input)
    this.data[key] = value
  }

  get(input) {
    let key = this._hash(input)
    return this.data[key]
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
