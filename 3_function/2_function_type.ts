/**
 * Function Type
 */
type Mapper = (name: string) => string
const runner = (callback : Mapper) => {
    return ['IU', 'Momo'].map(callback)
}

console.log(runner(name => name + '!!!'));

type MuliplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MuliplyTwoNumbers = (x, y) => x * y

/**
 * Interface로 함수 타입 선언
 */
interface IMultiplyTwoNumbers {
    (x: number, y: number): number;
}

const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x, y) => x * y

console.log(multiplyTwoNumbers(1, 2));
