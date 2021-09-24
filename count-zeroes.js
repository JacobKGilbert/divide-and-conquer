function countZeroes(arr) {
  let i = -1
  let leftIdx = 0
  let rightIdx = arr.length - 1

  while (rightIdx >= leftIdx) {
    const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
    const midVal = arr[midIdx]

    if ((midIdx === 0 || arr[midIdx - 1] === 1) && midVal === 0) {
      i = midIdx
      break
    } else if (midVal === 1) {
      leftIdx = midIdx + 1
    } else {
      rightIdx = midIdx - 1
    }
  }

  if (i === -1) return 0
  return arr.length - i
}

module.exports = countZeroes