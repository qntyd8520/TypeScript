/**
 * Statement and Expression (문장과 표현식)
 */

// Statement (문장)
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

// Expression (표현식)
const addTwoNumbersExpression = (a: number, b: number) => {
  return a + b;
}

/**
 * Statement (문장)
 */
function add(x : number, y : number): number {
  return x + y;
}

function subtract(x : number, y : number): number {
    return x - y;
}

/**
 * Expression (표현식)
 * - 함수 표현식을 사전에 정의하여 사용
 */
type CalculationType = (x: number, y: number) => number;
const add2 : CalculationType = (x, y) => {
    return x + y;
}

const subtract2 : CalculationType = (x, y) => {
    return x - y;
}