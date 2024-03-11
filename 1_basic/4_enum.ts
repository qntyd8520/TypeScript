/**
 * Enum 
 */

/**
 * API Request
 * 4가지 상태 
 *  
 * DONE - 완료
 * ERROR - 에러
 * LODING - 로딩
 * INITIAL - 초기
 */

const runWork = () => {
    let state = "INITIAL";
    try {
        state = "LODING";
        // 작업진행 
        state = "DONE"
    } catch (error) {
        state = "ERROR";
    } finally {
        return state;
    }
}

console.log(runWork());


enum RequestState {
    DONE = "DONE",
    ERROR = "ERROR",
    LODING = "LODING",
    INITIAL = "INITIAL"
}

const runWork2 = () => {
    let state = RequestState.INITIAL;
    try {
        state = RequestState.LODING;
        // 작업진행 
        state = RequestState.DONE;
    } catch (error) {
        state = RequestState.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork2() === RequestState.DONE);

