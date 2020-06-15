/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length;
}

console.log(length('Good morning'));

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  const strLingth = str.length;

  if (strLingth % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lengthIsEven('Good night'));

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  return str.charAt(0);
}

console.log(firstChar('This is a pen'));

/**
 *  4.4 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  return str.slice(a, b);
}

console.log(substring('This is a pen', 3, 6));

/**
 *  4.5 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 *
 */

function isInclude(a, b) {
  if (a.match(b)) {
    return true;
  } else {
    return false;
  }
}

console.log(isInclude('workplace', 'work'));

/**
 *  4.6 引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  const strSplit = str.split('');
  const strLrngth = str.length;

  for (let i = 0; i < strLrngth; i++) {
    if (strSplit[i] === strSplit[strLrngth - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome('anna'));
