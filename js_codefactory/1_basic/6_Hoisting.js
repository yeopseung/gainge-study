/**
 * Hoisting
 *
 *  모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 *  var로 선언하였을 경우 Hoisting을 막을 수 없음
 *  -> 우리가 let, const를 쓰는 이유
 */


console.log(name);
let name = '곽승엽';
console.log(name);

// 위의 코드가 아래와 같이 동작함
// let name;
// console.log(name);
// name = '곽승엽';
// console.log(name);