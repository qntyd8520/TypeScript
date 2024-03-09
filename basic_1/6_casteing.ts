/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이안된다. (JS엔 없는개념)
 */

const codefactory = "Code Factory";

console.log(codefactory.toLocaleLowerCase());

let sampleNumber : any = 5;
let stringVar = sampleNumber as string; 

console.log(typeof(sampleNumber as string)); // string이 출력되어야할거같지만 JS에서 cast는 없기에 as 문이 적용안됨




