// 상속
// 1) 객체들 간의 관계를 구축하는 방법
// 2) 부모클래스 또는 수퍼클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있음
// 3) extends 키워드를 통해

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return '여자 아이돌이 춤을 춥니다';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 춥니다';
    }
}

const yuJin = new FemaleIdolModel("안유진", 2003);
console.log(yuJin instanceof IdolModel);    // true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false

