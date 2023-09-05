// 클래스
// 객체(=인스턴스)를 생성하기 위한 변수와 메소드를 정의하는 일종의 틀
// 즉, 정보를 일반화해서 정리하는 방법
// typedef - function (클래스로 만든 인스턴스는 object 타입)
// 속성 - optional, constructor에 적어놔도 상관 없음 (그래도 정의하는거 추천)

// 클래스
class IdolModel{
    // 속성
    name;
    year;

    // 생성자
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // 메소드
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yuJin = new IdolModel("안유진", 2003);

console.log(yuJin.name());
console.log(yuJin.sayName());

console.log(typeof IdolModel);  // undefined
console.log(typeof yuJin);  // object





