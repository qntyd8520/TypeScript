/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
}

// 포함시켜 가져오기
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;

// 제외하고 가져오기
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser';

type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];