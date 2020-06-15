/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 *
 */

const nums = [3, 6, 8, 1, 4, 9, 2, 10, 5, 7, 0];

function printOneToTenDesc() {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j > i; j--) {
      if (nums[j] > nums[j - 1]) {
        let tmp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = tmp;
      }
    }
  }

  console.log(nums);
}

printOneToTenDesc();

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let num = 0;
  let arr = [];

  while (num < 10) {
    console.log((num += 1));
  }
}

printOneToTenWhile();
