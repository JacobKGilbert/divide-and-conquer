function sortedFrequency(arr, val) {
  let firstIdx = find(arr, val, 'first')
  if (firstIdx == -1) return firstIdx
  let lastIdx = find(arr, val, 'last')
  return lastIdx - firstIdx + 1
}

function find(arr, val, position) {
  let leftIdx = 0
  let rightIdx = arr.length - 1

  if (position === 'first') {
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2)
      const midVal = arr[midIdx]

      if ((midIdx === 0 || val > arr[midIdx - 1]) && midVal === val) {
        return midIdx
      } else if (val > midVal) {
        leftIdx = midIdx + 1
      } else {
        rightIdx = midIdx - 1
      }
    }
  } else if (position === 'last') {
    while (leftIdx <= rightIdx) {
      const midIdx = Math.floor((leftIdx + rightIdx) / 2)
      const midVal = arr[midIdx]

      if ((midIdx === arr.length - 1 || val < arr[midIdx + 1]) && midVal === val) {
        return midIdx
      } else if (val < midVal) {
        rightIdx = midIdx - 1
      } else {
        leftIdx = midIdx + 1
      }
    }
  }
  return -1
}

module.exports = sortedFrequency