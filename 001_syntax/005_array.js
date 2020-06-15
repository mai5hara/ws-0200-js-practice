/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

const nums = [4, 30, 62, 81, 4, 25, 1, 99, 6, 10];

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray(nums);

/**
 *  5.2 全ての曜日を配列として返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */

const dayOfTheWeek = 'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday';

function getDays() {
  return dayOfTheWeek.split(',');
}

console.log(getDays());

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  if (array.includes(num)) {
    return true;
  } else {
    return false;
  }
}

console.log(findNum([3, 6, 12, 8], 1));

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  array.forEach((val) => {
    const firstIndex = array.indexOf(val);
    const ladtIndex = array.lastIndexOf(val);

    if (firstIndex != ladtIndex) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  });
}

isDuplicate([1, 2, 3, 6, 2]);
