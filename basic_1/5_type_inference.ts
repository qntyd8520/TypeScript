/**
 * Type Inference
 * 
 * 타입 추론
 */
// .ts TypeScript는 초기화시 할당하면 타입이 추론됨
let stringType = "string";
let numberType = 1;
let booleanType = true;

// stringType = true; // error Type이 추론되어 할당불가

const constStringType = "const string"; // const를 사용해서 타입을 선언하면 구체적인 추론이됨 입력된값만 사용가능

let idol = {
    name: "BTS",
    member: 7
}

const constIdol = {
    name: "BTS" as const,
    member: 7 as const
}

// constIdol.name = "IU"; as const 로 구체화하면 변경불가 캐스팅이없으면 객체 변경가능
constIdol.name = "BTS"


/** 
 * Array
 */

let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, "2", 3, "4", 5];

numbers.push(6);
// numbers.push("5"); // error
numbersAndString.push(6);
numbersAndString.push("0");

const number = numbers[0];
const nos = numbersAndString[1];

// tuple
const twoNumbers = [1, 2] as const;
// twoNumbers[0] = 10; // error
// twoNumbers.push(3); // error
const first = twoNumbers[0];

// const nos2 = numbersAndString[100]; // list의 size를 넘는걸 선언가능 버그발생
// const first2 = twoNumbers[100]; 위와같은 버그방지