function quickSort(arr) {
    const n = arr.length;
    if (n <= 1) {
      return arr;
    }
    const pivot = arr[n-1];
    const left = [], right = [];
    for (let i = 0; i < n-1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([3,4,5,6,7,7,1]))
