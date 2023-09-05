
// getter
// 1) 데이터를 가공해서 새로운 데이터를 반환할 때
// 2) private한 값을 반환할 때

// setter
// 1) 값을 새로 저장할 때
// 2) setter는 현재 많이 사용하지 않음 (현대에는 immutable programming을 선호하기 때문에)

// 요즘 -> getter는 가끔 사용, setter 사용 안함

class IdolModel{
    // 속성
    #name;  // private
    year;

    // 생성자
    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    // getter
    get getNameAndYear(){
        return `${this.name}-${this.year}`;
    }

    // setter
    set setName(name){
        this.#name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.getNameAndYear); // 안유진-2003
