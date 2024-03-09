"use strict";
/**
 * Typescript Basics
 */
let helloText = "hello";
// helloText = 1;
// helloText = true;
/**
 * 7 primitive types In JavaScript
 */
const stringVar = "String";
const numberVar = 1;
// const bigIntVar: bigint = 1n; // 가능
const bigIntVar = BigInt(1);
const booleanVar = true;
const symbolVar = Symbol();
const nullVar = null;
const undefinedVar = undefined;
/**
 * primitive types In Typescript
 */
let anyVar; // Like JavaScript var 아무 타입이나 입력
anyVar = "hello";
anyVar = 1;
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
let testSymbol = anyVar;
let testNull = anyVar;
let testUndefined = anyVar;
// unkown - 알 수 없는타입
let unkownType;
unkownType = "hello";
unkownType = 1;
unkownType = true;
// let testString2: string = unkownType; // unkownType은 다른타입변수에 할당불가
// let testNumber2: number = unkownType; 
// let testBoolean2: boolean = unkownType;
// never - 어떠한 타입도 저장되거나 반환되지 않을때 사용하는 타입
let neverType;
// neverType = "hello"; // neverType는 값 할당불가
// neverType = 1;
// neverType = true;
/**
 * List Type
 */
const listNumber = [1, 2, 3];
const listString = ["hello", "world"];
const booleanList = [true, false, true];
