/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return console.log(array[i]);
    }
  }

  return -1;
}

linearSearch([1, 3, 2, 4, 5], 4);

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch(array, target) {
  var low = 0;
  var high = array.length - 1;
  var index = -1;

  while (low <= high) {
    mid = Math.floor(low + high / 2);
    console.log('mid', mid);

    if (array[mid] == target) {
      index = mid;
      break;
    } else if (array[mid] < target) {
      console.log('array[mid])', array[mid]);
      low = mid + 1;
      console.log('low', low);
    } else {
      console.log('array[mid])', array[mid]);
      high = mid - 1;
      console.log('high', high);
    }
  }

  if (array[index] == undefined) {
    return console.log(-1);
  } else {
    return console.log(array[index]);
  }
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
