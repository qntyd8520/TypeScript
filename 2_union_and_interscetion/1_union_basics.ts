/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나 | <- pipeline
 * OR의 개념
 * 
 * 타입을 제안하거나 값을 제안하여 원하는 영역의 값들만 입력 사용 할수있도록 하는 기능
 */

type StringOrBoolean = string | boolean;

let stringOrBoolean : StringOrBoolean = "hello";
stringOrBoolean = true;
// stringOrBoolean = 1; // 할당불가

type StringOrBooleanOrNumberOrNull = string | boolean | number | null;

type StateTypes = "loading" | "success" | "fail";

/**
 * 리스트의 유니언
 */
type StringListOrBooleanList = string[] | boolean[];
let stringListOrBooleanList : StringListOrBooleanList = ["hello"];
stringListOrBooleanList = [true];
// stringListOrBooleanList = [1]; // 할당불가
console.log(stringListOrBooleanList);

type StringListOrBooleanList2 = (string | boolean)[];
let stringListOrBooleanList2 : StringListOrBooleanList2;
stringListOrBooleanList2 = [true, "hello", false];

interface Person {
    name : string;
    age : number;
}

interface Cat {
    breed : string;
    country : string;
}

type PersonOrCat = Person | Cat;

const personOrCat : PersonOrCat = {
    name : "IU",
    age : 10,
    country : "korea"
}

// console.log(personOrCat.name);


