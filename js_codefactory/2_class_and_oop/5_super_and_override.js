// super 
// 1) 부모 클래스에 접근할 수 있는 키워드




class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    part;   // 노래 or 춤

    // override
    constructor(name, year, part){
        // super
        super.name = name;
        super.year = year;
        this.part = part;
    }

    sayName(){
        // return `안녕하세요 저는 ${super.name}입니다. ${this.part}를 맡고있습니다`; 
        // -> 원래 다른 언어에서는 잘 되는건데 JS는 this 키워드를 사용해야 함..

        // return `안녕하세요 저는 ${this.name}입니다. ${this.part}를 맡고있습니다`;
        // -> 이렇게 this 키워드를 사용하여 접근

        // 메소드 같은 경우에는 super 키워드를 사용해서 접근 가능하니 이렇게 하는 것도 방법
        return `${super.sayName()} ${this.part}를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel("안유진", 2003);
console.log(yuJin);