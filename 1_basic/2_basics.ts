/**
 * Typescript Basics
 */

let helloText: string = "hello";
// helloText = 1;
// helloText = true;

/**
 * 7 primitive types In JavaScript
 */
const stringVar: string = "String";
const numberVar: number = 1;
// const bigIntVar: bigint = 1n; // 가능
const bigIntVar: bigint = BigInt(1);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol();
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * primitive types In Typescript
 */
let anyVar : any; // Like JavaScript var 아무 타입이나 입력
anyVar = "hello";
anyVar = 1;
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;
let testSymbol: symbol = anyVar;
let testNull: null = anyVar;
let testUndefined: undefined = anyVar;

// unkown - 알 수 없는타입
let unkownType: unknown;
unkownType = "hello";
unkownType = 1;
unkownType = true;

// let testString2: string = unkownType; // unkownType은 다른타입변수에 할당불가
// let testNumber2: number = unkownType; 
// let testBoolean2: boolean = unkownType;

// never - 어떠한 타입도 저장되거나 반환되지 않을때 사용하는 타입
let neverType: never;
// neverType = "hello"; // neverType는 값 할당불가
// neverType = 1;
// neverType = true;

/**
 * List Type
 */
const listNumber: number[] = [1,2,3];
const listString: string[] = ["hello", "world"];
const booleanList: boolean[] = [true, false, true];

// 터미널에서 tsc 입력시 .ts > .js conversion
// 실제 런타임 환경에서 .ts파일은 컴파일되지않음 / .js로 변환되어 컴파일됨
