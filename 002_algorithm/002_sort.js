/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; i < j; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array, console.log(array);
}

bubbleSort([1, 3, 2, 4, 5]);

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort(array) {
  console.log(array);
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    console.log(temp);
    for (var j = i - 1; j >= 0; j--) {
      console.log('j', j);
      if (array[j] > temp) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = temp;
  }
  return array, console.log(array);
}

insertSort([5, 10, 7, 32]);

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function midPoint(nums) {
  return parseInt(nums.length / 2 + 0.5, 10);
}

function setMarge(arr1, arr2) {
  console.log('arr1', arr1, 'arr2', arr2);
  var arr = [];
  while (arr1.length || arr2.length) {
    if (arr1.length == 0) {
      arr.push(arr2.shift());
    } else if (arr2.length == 0) {
      arr.push(arr1.shift());
    } else if (arr1[0] > arr2[0]) {
      arr.push(arr2.shift());
    } else {
      arr.push(arr1.shift());
    }
  }
  return arr;
}

function mergeSort(numbers) {
  if (!numbers.length) {
    return [];
  } else if (numbers.length == 1) {
  } else if (numbers.length == 2) {
    if (numbers[0] > numbers[1]) {
      var tmp = numbers[0];
      numbers[0] = numbers[1];
      numbers[1] = tmp;
    }
  } else {
    var midNum = midPoint(numbers);
    var arr1 = numbers.slice(0, midNum);
    var arr2 = numbers.slice(midNum);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    numbers = setMarge(arr1, arr2);
  }
  return numbers;
}

console.log(mergeSort([1, 3, 2, 4, 5, 32, 18]));

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort(start, end) {
  var pivot = array[Math.floor((start + end) / 2)];

  var left = start;
  var right = end;

  while (true) {
    while (array[left] < pivot) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (right <= left) {
      break;
    }

    var tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
    left++;
    right--;
  }

  if (start < left - 1) {
    quickSort(start, left - 1);
  }
  if (right + 1 < end) {
    quickSort(right + 1, end);
  }
}

var array = [1, 3, 2, 4, 5, 32, 18];
quickSort(0, array.length - 1);

console.log(array);
