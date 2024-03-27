/**
 * Oberloading
 * 가능한 사용하지 않는것을 권장한다.
 * 각각의 함수로 분리하여 사용하는것이 좋다.
 */

/**
 * Parameter Overloading 
 * 1) 하나를 받거나
 * 2) 세개를 받는다.
 */
function stringOrString(memberOsMembers: string): string;
function stringOrString(memberOsMembers: string, member2: string, member3:string): string;
function stringOrString(memberOsMembers: string, member2?: string, member3?: string): string {
    if (member2 && member3) {
        return `members : ${memberOsMembers} ${member2} ${member3}`;
    } else {
        return memberOsMembers;
    }
}

console.log(stringOrString('member1'));
console.log(stringOrString('member1', 'member2', 'member3'));
// console.log(stringOrString('member1', 'member2')); error : 3번째 인자가 없음


