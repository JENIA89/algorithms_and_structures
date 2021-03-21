// Бинарный поиск
// Сложность aлгоритма O(log2n)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//Кол-во итераций
let count = 0;

const searchFunc = (array, item) => {
  let start = 0;
  let middle;
  let position = -1;
  let end = array.length;

  while (start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
};

// Рекурсивный способ

function recurBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return recurBinarySearch(array, item, start, middle - 1);
  } else {
    return recurBinarySearch(array, item, middle - 1, end);
  }
}

console.log(recurBinarySearch(arr, 15, 0, arr.length));
console.log(searchFunc(arr, 15));
console.log(count);
