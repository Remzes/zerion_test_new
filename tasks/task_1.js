//Упрощает логику, на не придется прописывать логику, когда X2 < X1
const swap = (item) => {
  if (item.x1 > item.x2) { [item.x2, item.x1] = [item.x1, item.x2] }
  return item
}

const logic = (a, b) => {
  return (b.x1 >= a.x1 && b.x1 <= a.x2) || (b.x2 >= a.x1 && b.x2 <= a.x2)
}

const isIntersect = () => {
  let points = [];
  let iterate = 1;
  for (let i = 0; i < arguments.length; i++) {
    points[i] = arguments[i];
  }

  //Iterate through all elements
  for (let index = 0, length = points.length - 1; index < length; index++) {
    let firstItem = swap(points[index])

    //Choose the second item
    for (let innerInd = iterate, len = points.length; innerInd < len; innerInd++) {
      let secondItem = swap(points[innerInd]);
      if (logic(firstItem, secondItem)) return true
    }
    iterate++
  }
  return false
}