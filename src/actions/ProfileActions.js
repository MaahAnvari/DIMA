import { 
    NAME_CHANGED,
    GENRE_CHANGED,
} from './types';

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const usernameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const sexChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const addGenre = (text) => {
    return {
        type: GENRE_CHANGED,
        payload: text
    };
};