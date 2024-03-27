/**
 * Type Predicates
 * 
 * 변수 타입 체크
 */

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function isNumberRetBool(input : any) : boolean {
  return typeof input === 'number';
}

let number : any = 5;

if(isNumberRetBool(number)) {
  number; // type: Any
}

if(isNumber(number)) {
  number; // type: Number
}

interface Doge {
    name: string;
    age: number;
}
interface Cat {
    name: string;
    breed: string;
}
type DogeOrCat = Doge | Cat;

function isDoge(animal : DogeOrCat) : animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge : DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 5
} : {
    name: "고양이",
    breed: "코숏"
}

if(isDoge(doge)) {
    doge; // type: Doge
} else {
    doge; // type: cat
}