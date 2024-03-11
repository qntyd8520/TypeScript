/**
 * Narrowing
 * 
 * Narrowing 은 Union타입에서 더 구체적인 타입으로
 * 논리적으로 유추 할 수 있게되는걸 의미
 */

// let numberOrString : number | string = 'hello world';
// numberOrString
// 생성과 동시에 초기화

const decimal = 12.1234;
console.log(decimal.toFixed(1)); // 반올림

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing // false, 0, '', null, undefined
 * 4) Equality Narrowing
 * 5) In operator Narrowing
 * 6) Instanceof Narrowing
 * 7) discrimated union Narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 * 
 */
// 1) Assignment Narrowing
let numberOrString : number | string = "아이유";
numberOrString.toString();

// 2) typeof Narrowing
numberOrString = Math.random() > 0.5 ? 123 : "아이유"; // 반환될때 Type이 결정

if(typeof numberOrString === "string") { // String타입이 아니면 Number니까
    numberOrString;
} else {
    numberOrString;
}

// 3) Truthiness Narrowing
let nullOrString : string[] | null = Math.random() > 0.5 ? ["hello", "world"] : null;

if(nullOrString) { // null은 false니까
    nullOrString;
} else {
    nullOrString;
}

// 4) Equality Narrowing 같은지를 비교
let numberOrString2 : number | string = Math.random() > 0.5 ? 123 : "아이유";
let stringOrBoolean : string | boolean = Math.random() > 0.5 ? "hello" : true;

if(numberOrString2 === stringOrBoolean) {
    numberOrString2;
    stringOrBoolean;
} else {
    numberOrString2;
    stringOrBoolean;
}

let numberOrStringOrNull : number | string | null = Math.random() > 0.5 ? 
                                                    123 : Math.random() > 0.5 ? "아이유" : null;

if(typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull;
}

// 5) In operator Narrowing
interface Human {
    name : string;
    age : number;
}

interface Dog {
    name : string;
    type : string;
}

let human : Human = {
    name : "아이유",
    age : 123
}

let dog : Dog = { 
    name : "오리",
    type : "흰오리"
}

let humanOrDog : Human | Dog = Math.random() > 0.5 ? human : dog;
if("age" in humanOrDog) {
    humanOrDog.name;
    humanOrDog.age;
} else {
    humanOrDog.name;
    humanOrDog.type;
}

// 6) Instanceof Narrowing
let dateOrStirng: Date | string = Math.random() > 0.5 ? new Date() : "hello";
if(dateOrStirng instanceof Date) {
    dateOrStirng;
} else {
    dateOrStirng;
}

// 7) discrimated union Narrowing
interface Animal {
    type : 'dog' | 'human';
    height?: number;
    breed?: string;
}

let animal : Animal = Math.random() > 0.5 ? {
    type : 'dog',
    breed : 'husky'
} : {
    type : 'human',
    height : 180
}

if(animal.type === 'human'){
    animal.height;
} else {
    animal.breed;
    animal.height;
}

// 뭉틍그려서 선언하지말고 나눠서 선언
interface Dog2 {
    type : 'dog';
    breed : string;
}

interface Human2 {
    type : 'human';
    height : number;
}

type DogOrHuman = Dog2 | Human2;

let dogOrHuman : DogOrHuman = Math.random() > 0.5 ? {
    type : 'human',
    height : 180
} : {
    type : 'dog',
    breed : 'husky'
}

if(dogOrHuman.type === "human"){
    dogOrHuman;
} else {
    dogOrHuman;
}

// 8) exhaustiveness checking
switch(dogOrHuman.type){
    case "human":
        dogOrHuman;
        break;
    case "dog":
        dogOrHuman;
        break;
    default:
        dogOrHuman;

        const _check : never = dogOrHuman; // Type의 확장성을 막기 위해서 사용 Error방지
        // human | dog | 확장타입 선언시
        break;
}