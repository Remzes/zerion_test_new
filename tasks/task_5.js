const objectToArray = (obj) => {
  const arr = []
  const keys = Object.keys(obj)

  keys.forEach(function(el) {
    let parsed = parseInt(el).toString() === el ? parseInt(el) : el
    this.push(parsed, obj[el])
  }, arr)

  return arr
}