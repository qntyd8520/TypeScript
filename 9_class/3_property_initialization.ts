/**
 * Property Initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    // optional 값 선언법
    pet?: string;
    // type of undefined 선언법
    petAge: number | undefined;

    constructor(name: string){
        this.name = name;
    }
}

class RouteStack{
    stack!: string[]; // !는 초기화가 보장됨을 표시

    initialize(){
        this.stack = [];
    }

    constructor(){
        this.initialize();
    }
}

const routeStack = new RouteStack();
console.log(routeStack);