const arrayToObject = (array) => {
  const object = array.reduce((res, item, index) => {
    if (index % 2 !== 0) {
      let key = array[index-1]
      res[key] = item
    }
    return res
  }, {})
  return object
}
