#!/usr/bin/node

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const sortedArray = [];

  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      sortedArray.push(arr1[i]);
      i += 1;
    } else {
      sortedArray.push(arr2[j]);
      j += 1;
    }
  }

  while(i < arr1.length) {
    sortedArray.push(arr1[i]);
    i += 1;
  }

  while(j < arr2.length) {
    sortedArray.push(arr2[j]);
    j += 1;
  }

  return sortedArray;
}

function mergeSort(arrInput) {
  if (arrInput.length < 2) {
    return arrInput;
  } 
  const mid = Math.floor(arrInput.length / 2);
  const left = mergeSort(arrInput.slice(0, mid));
  const right = mergeSort(arrInput.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([8,2,5,3,1,4,6,7])); // [1, 2, 3, 4, 5, 6, 7, 8]