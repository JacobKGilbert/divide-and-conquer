function findRotatedIndex(arr, val) {
  const pivotPoint = locatePivot(arr)

  if (pivotPoint > 0 && val >= arr[0] && val <= arr[pivotPoint - 1]) {
    return binarySearch(arr, val, 0, pivotPoint - 1)
  } else {
    return binarySearch(arr, val, pivotPoint, arr.length - 1)
  }
}

function locatePivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0
  let leftIdx = 0
  let rightIdx = arr.length - 1

  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    const midVal = arr[midIdx]

    if (midVal > arr[midIdx + 1]) return midIdx + 1
    else if (arr[leftIdx] <= midVal) {
      leftIdx = midIdx + 1
    } else {
     rightIdx = midIdx - 1
    }
  }
}

function binarySearch(arr, val, leftIdx, rightIdx) {
  if (arr.length === 0) return -1
  if (val < arr[leftIdx] || val > arr[rightIdx]) return -1

  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    const midVal = arr[midIdx]

    if (midVal === val) {
      return midIdx
    } else if (val < midVal) {
      rightIdx = midIdx - 1
    } else {
      leftIdx = midIdx + 1
    }
  }
  return -1
}

module.exports = findRotatedIndex