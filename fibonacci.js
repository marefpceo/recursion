#!/usr/bin/node

function fibs(n) {
  const num = [];
  let temp = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i === 0) {
      temp = 0;
      num.push(temp);
    } if (i === 1) {
      temp = 1;
      num.push(temp);
    } if (i >= 2) {
      temp = num[i - 1] + num[i - 2];
      num.push(temp);
    }
  }
  return `fibs: ${  num}`;
}

function fibsRec(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const numRec = fibsRec(n - 1);
  numRec.push(numRec[n - 1] + numRec[n - 2]);
  return numRec;
}

console.log(fibs(8));
console.log(fibsRec(8));