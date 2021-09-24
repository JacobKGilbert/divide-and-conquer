function findRotationCount(arr) {
  let leftIdx = 0
  let rightIdx = arr.length - 1

  while (leftIdx <= rightIdx) {
    if (rightIdx === leftIdx) return leftIdx

    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    const midVal = arr[midIdx]

    if (midIdx < rightIdx && arr[midIdx + 1] < midVal) return midIdx + 1

    if (midIdx > leftIdx && midVal < arr[midIdx - 1]) return midIdx

    if (arr[rightIdx] > midVal) {
      rightIdx = midIdx - 1
    } else {
      leftIdx = midIdx + 1
    }
  }
  return 0
}

module.exports = findRotationCount