function hashStringToInt(s, tableSize) {
  let hash = 7
  for(let i = 0; i < s.length; i++) {
    hash = (17 * s.charCodeAt(i) * tableSize) % tableSize
  }
  return hash
}

class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.numItems = 0
    this.loadFactor = this.numItems / this.table.length
  }

  resize = () => {
    const newTable = new Array(this.table.length * 2)
    this.table.forEach(item => {
      item.forEach(([key, value]) => {
        const idx = hashStringToInt(key, newTable.length)
        if(newTable[idx]){
          newTable[idx].push([key, value])
        } else {
          newTable[idx] = [[key,value]]
        }
      })
    })

  }

  setItem = (key, value) => {
    this.numItems++
    if(this.loadFactor > .8) this.resize()

    const idx = hashStringToInt(key, tableSize)
    if(this.table[idx]) {
      this.table[idx].push([key,value])
    }else {
      this.table[idx] = [[key,value]]
    }
  }

  getItem = (key) => {
    const idx = hashStringToInt(key)
    if(this.table[idx]) {
      return this.table[idx].find(x => x[0] === key)[1]
    }else return null
  }
}
