// Быстрая сортировка
// Сложность aлгоритма O(log2n * n)

const arr = [4, 9, 2, -5, 46, 8, 12, 0, 34, 17, 24, 3, 65];

//Кол-во итераций
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let middle = array[middleIndex];
  let lessArr = [];
  let greaterArr = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === middleIndex) continue;
    if (i < middle) {
      lessArr.push(array[i]);
    } else {
      greaterArr.push(array[i]);
    }
  }

  return [...quickSort(lessArr), middle, ...quickSort(greaterArr)];
}

console.log(quickSort(arr));
console.log(count);
