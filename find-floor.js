function findFloor(arr, val) {
  let leftIdx = 0
  let rightIdx = arr.length - 1

  if (val >= arr[rightIdx]) return arr[rightIdx]

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    const middleVal = arr[middleIdx]

    if (middleVal === val) return middleVal

    if (middleIdx > 0 && arr[middleIdx - 1] <= val && val < middleVal) {
      return arr[middleIdx - 1]
    }
    
    if (val < middleVal) {
      rightIdx = middleIdx - 1
    } else {
      leftIdx = middleIdx + 1
    }
  }
  return -1
}

module.exports = findFloor