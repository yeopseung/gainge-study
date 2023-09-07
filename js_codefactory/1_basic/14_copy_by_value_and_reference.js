/**
 * copy by value - 값에 의한 전달
 * copy by reference - 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 * 
 */

// primitive type - copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);  // 안녕하세요
console.log(clone);     // 안녕하세요

console.log('-------');

clone += ' 안유진 입니다';
console.log(original);  // 안녕하세요
console.log(clone);     // 안녕하세요 안유진 입니다

// 결론 : 다음과 같이 값을 그대로 가져오는 것을 copy by value라고 함 (일반적인 논리대로 진행)

// object - copy by reference
let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);   // { name: '안유진', group: '아이브' }
console.log(cloneObj);      // { name: '안유진', group: '아이브' }

console.log('----------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);   // { name: '안유진', group: '코드팩토리' }
console.log(cloneObj);      // { name: '안유진', group: '코드팩토리' }

// 결론 : 값을 변경하는 것이 아닌 참조(가리키는)를 가져오는 것을 copy by reference

/**
 * Spread Operator '...' => Object 타입의 값은 copy by value로 복사
 */

console.log('----------');
const originalObj2 = {
    ...originalObj,
};
console.log(originalObj2);
console.log(originalObj === originalObj2);