const arr = [4, 9, 2, -5, 46, 8, 12, 0, 34, 17, 24, 3, 65];

let count = 0;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }

    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

console.log(selectionSort(arr));
console.log(count);
