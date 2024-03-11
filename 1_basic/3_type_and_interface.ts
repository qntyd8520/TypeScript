/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 TS의 타입에 이름을 지어주는 역할
 */

type NewStringType = string;
type NewNumberType = number;
type NewBooleanType = boolean;


let stringVar : NewStringType = "test";

// Ex
type MaleOfFemale = "male" | "female"; // 지정된 값만 사용가능
type IdolType = {
    name : string;
    year : number;
}

const idol : IdolType = {
    name : "IU",
    year : 2019
}
// or
const idol2 : {name : string, year : number} = {
    name : "IU",
    year : 2019,
}

/**
 * Interface
 * 
 * Type 과 Interface는 비슷한 기능이 많음
 */
// interface NewStringInterface = string; // 이런형태의 선언은 Interface에서 불가

interface IdolInterface {
    name : string;
    year : number;
}

const idol3 : IdolInterface = {
    name : "IU",
    year : 2019
}

interface IdolInterface2 {
    name : NewStringType;
    year : NewNumberType;
}

const idol4 : IdolInterface2 = {
    name : "IU",
    year : 2019
}

// Optional
interface IdolOptional {
    name : NewStringType;
    year? : NewNumberType; // ? = optional 있어도되고 없어도되고 Like Required = false
} 
const idol5 : IdolOptional = {
    name : "IU",
    // year : 2019
}




