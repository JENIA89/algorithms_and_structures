// Сортировка пузырьклм
// Сложность aлгоритма O(n2)

const arr = [4, 9, 2, -5, 46, 8, 12, 0, 34, 17, 24, 3, 65];

//Кол-во итераций
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
console.log(count);
