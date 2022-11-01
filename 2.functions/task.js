function getArrayParams(arr) {
  let min, max, sum, avg;

  min = 100;
  max = -100;
  sum = 0;
  avg = 0;
  console.log(arr)

  for (let i = 0; i < arr.length; i++ ) {
    if (max < arr[i]) {
      max = arr[i];
    };
    if ( min > arr[i]) {
      min = arr[i];
    };

    sum = sum + arr[i];
    avg = Number((sum / arr.length).toFixed(2))
  }; 

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for ( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max; 
  max = 0;
  // Ваш кода
  // for ...
  for ( let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (max < sum) {
      max = sum
    };
  };
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let max = - Infinity;
  let min = Infinity;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] > max) {
      max = arr [i];
    };
    if ( arr[i] < min ) {
      min = arr[i];
    };
  };

  let differenceOfNumbers = Math.abs(max - min);
  return differenceOfNumbers;

}
