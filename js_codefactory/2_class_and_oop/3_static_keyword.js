// static
// 1) 클래스에 귀속되도록 하는 키워드
// 2) 객체를 생성하지 않아도 사용 가능
// 3) 언제 쓰나? - factory constructor를 만들 때 유용

// factory constructor 
// 1) 생성자를 사용하지 않아도 객체를 만들 수 있는 패턴
// 2) static 메소드에서 생성자를 호출하여 객체를 만든다
// 3) 생성자를 여러개 만들 필요 없이 여러 방향의 생성자를 만들 수 있음

class IdolModel{
    // static
    static groupName = "아이브";

    // 속성
    name;  // private
    year;

    // 생성자
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // factory constructor 
    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    // factory constructor 
    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

console.log(IdolModel.groupName);   // 아이브



