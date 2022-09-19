import { 
    NAME_CHANGED,
    GENRE_CHANGED,
    ERROR,
    UPDATE_USER_DATA,
} from './types';

import firestore from '@react-native-firebase/firestore';

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const saveChanges = ({id, name, sex, genre}) => {
console.log('ooooooomad to save change')
    const document = firestore().collection('Users').doc(id).update({
        name: name,
        sex: sex,
        genre: genre,
      })
      .then(() => {
        console.log('User updated!');
      });
      return {
        type: UPDATE_USER_DATA,
        payload: {id, name, sex, genre}
    };
}

export const usernameChanged = (text) => {
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

export const addUser = ({name, age,  }) => {
    
    return (dispatch) => {
        firestore().collection('Users').add({ name: name, age: age })
          .then(() => { dispatch( {
            type: SVAE_USER_DATA,
            payload: 'user added!'
        }); });

    }
}