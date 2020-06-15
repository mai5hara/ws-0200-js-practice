/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

// const person = {};

function getPersonObject() {
  return (person = {
    name: 'Bob',
    age: 32,
    gender: 'male',
  });
}

console.log(getPersonObject());

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

const person1 = {
  name: 'Bob',
  age: 32,
  gender: 'male',
};

console.log(person1);

function mutateObject(person) {
  person['name'] = 'Mary';
  person['age'] = 37;
  person['gender'] = 'femail';
  console.log(person);
}

mutateObject(person1);

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

const people = ['Bob', 'Mary', 'Ann', 'Mike'];
const peopleObj = {};

function assignNumber(persons) {
  persons.forEach((person) => {
    peopleObj[person] = Math.floor(Math.random() * 10 + 1);
  });

  console.log(peopleObj);
}

assignNumber(people);

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */

function isDuplicate(array) {}

isDuplicate([1, 2, 2, 3]);
