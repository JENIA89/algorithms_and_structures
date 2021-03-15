// Линейный поиск
// Сложность aлгоритма O(n)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Кол-во итераций
let count = 0;

const searchFunc = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (item === array[i]) {
      return i;
    }
  }
  return false;
};

console.log(searchFunc(arr, 7));
console.log(count);
