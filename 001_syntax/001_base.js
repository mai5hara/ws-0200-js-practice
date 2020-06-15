/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log('Hello World');
}

helloWorld();

/**
 *  1.2 const を使って定義した変数を出力するdisplayConstメソッドを実装してください
 *
 */
const num = 5 + 10;
const num2 = 20 + 30;

function displayConst() {
  console.log(num + num2);
}

displayConst();

/**
 *  1.3 let を使って定義した変数を出力するdisplayLetメソッドを実装してください
 *
 */

let string = 'Hello Hello';

function displayLet() {
  console.log(string);
}

displayLet();

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */

function displayArgument(arg) {
  console.log(arg);
}

displayArgument('abcde');

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  return a + b;
}

console.log(sumTwoArgs(1, 2));

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return a - b;
}

console.log(subtractTwoArgs(5, 3));

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください
 *
 */
function quotientTwoArgs(a, b) {
  return a / b;
}

console.log(quotientTwoArgs(60, 30));

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  return a * b;
}

console.log(productTwoArgs(8, 25));

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  return a % 2;
}

console.log(remainderTwoArgs(45));

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  if (a % 2 === 0) {
    console.log('This is a multiple of 2');
  }
}

isEven(4);

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
const str1 = 'Hello';
const str2 = 'World';

function concatString(a, b) {
  return a + b;
}

console.log(concatString(str1, str2));
