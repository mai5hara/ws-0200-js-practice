/**
 *  2.1.1 Fizz Buxx
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

/**
 *  2.1.2 配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

const arr2 = [3, 6, 8, 24, 66, 83, 12, 30, 2];
let numTotal = 0;

function sum(array) {
  array.reduce((total, num) => {
    return (numTotal = total + num);
  });
  return numTotal, console.log(numTotal);
}

sum(arr2);

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *
 */

const arr3 = [2, 100, 18, 24, 66, 83, 80, 30, 6];
let max = 0;
let min = 0;

function minMax(array) {
  array.forEach((num) => {
    if (num > max) {
      (max = num), console.log('max', max);
    }
    if (num < min) {
      (min = num), console.log('min', min);
    }
  });
}

minMax(arr3);

/**
 *  2.1.4 文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */

function reverse(str) {
  let strArr = str.split('');
  console.log(strArr);
  return console.log(strArr.reverse().join(''));
}

reverse('library');

/**
 *  2.1.5 文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */

// let st rArr5;
// let chars = '';

function rotate(str, num) {
  let chars = '';
  let strArr5 = str.split('');

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      const popped = strArr5.pop();
      chars += popped;
    }
    chars = chars.split('').reverse();
    strArr5 = chars.concat(strArr5);
    strArr5 = strArr5.join('');

    return strArr5, console.log(strArr5);
  } else {
    for (let i = 0; i > num; i--) {
      const shifted = strArr5.shift();
      chars += shifted;
    }
    chars = chars.split('');
    strArr5 = strArr5.concat(chars);
    strArr5 = strArr5.join('');

    return strArr5, console.log(strArr5);
  }
}

rotate('library', -1);

/**
 *  2.1.6 文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let count = 0;
  const str = new RegExp(s2, 'g');

  const matchStr = s1.match(str);

  if (matchStr === 0) {
    count = 0;
  } else {
    count = matchStr.length;
  }

  return count, console.log(count);
}

countStr('abcdabeabc', 'abc');

/**
 *  2.1.7 素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (!1 || num / 2 === !1 || num / 3 === !1) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(2));

/**
 *  2.1.8 配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3 , 4] => 6
 *    [1, 2, 3 , 4, 5] => 6
 *    [1, 4, 3 , 4, 5] => 1
 *    [4, 3 , 3, 5] => 11
 *    [4, 3 , 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    count += array[i];

    if (array[i] === 4) {
      count -= 4;
      return console.log(count);
    }
  }
  return;
}

sumWithout4andNext([1, 4, 3, 4, 5]);
