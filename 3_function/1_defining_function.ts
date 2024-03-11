/**
 * Defining Function
 * 
 */

function printName(name : string){
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
    return `${person1} and ${person2}`;
}

console.log(returnTwoCouples("IU", "Momo"));
// console.log(returnTwoCouples("IU")); // 2개의 인수가 필요한데 1개를 가져왔습니다.
//console.log(returnTwoCouples("IU", 1)); // Type 'number' is not assignable to type 'string'.

/**
 * Optional Parameter
 */
function multiplyOrReturn(x : number, y ?: number){
    if(y){
        return x * y;
    } else {
        return x;
    }
    
}
console.log(multiplyOrReturn(1, 2));
console.log(multiplyOrReturn(1));

function multiplyOrReturn2(x : number, y : number = 20 ){ // 빈값일때 default value JS와 동일
    return x * y;
}
console.log(multiplyOrReturn2(1));
console.log(multiplyOrReturn2(1, 2));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args : string[]){
    return args.map(arg => `${arg}!!!`);
}
console.log(getInfiniteParameters("IU", "Momo", "Jihoon"));


/**
 * Return Type 
 */
function addTwoNumbers(x:number, y:number){ // 추상
    return x + y;
}

addTwoNumbers(10, 20);

function randomNumber(){
    return Math.random() > 0.5 ? 10 : "hello";
}
randomNumber()

function subtractTwoNumber(x : number, y:number) : number{ // 명시
    return x - y;
}

const subtractTwoNumbersArrow = (x : number, y: number) : number => x - y

/** 
 * 특수 반환 타입
 * 
 * void / never
 */
function doNotReturn() : void {
    console.log("hello");
    // return false; // void 타입은 반환가 없음.
}

function throwError() : never {
    throw new Error("hello");

    // while(true){
    // 반환되지않는 무한루프
    // }
}
