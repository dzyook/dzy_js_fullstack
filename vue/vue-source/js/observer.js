class observer {
  constructor(data) {
    // console.log(data)
    this.data = data
    this.walk(data)
    // console.log()
  }
  walk (data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(this.data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function getter () {
            return val
        },
        set: function setter (newVal) {
          val = newVal
        }
      })
  }
}
function observe (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new observer(value)
}