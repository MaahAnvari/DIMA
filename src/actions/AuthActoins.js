import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    CREATE_USER,
    INVALID_EMAIL,
    USER_EMAIL_EXIST,
    ERROR,
    SIGNIN_USER,
    WEAK_PASSWORD
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED, 
        payload: text
    };
};

export const confirmpasswordChanged = (text) => {
    return {
        type: CONFIRM_PASSWORD_CHANGED, 
        payload: text
    };
};

export const createUser = ({email, password, cpassword}) => {

    if(password == cpassword){
        return (dispatch) =>{
            auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log('User account created & signed in!', res.user.user);
            dispatch( {
                type: CREATE_USER,
                payload: res.user.user
            });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            dispatch({
                type: USER_EMAIL_EXIST,
                payload: 'error'
            });
            }
    
            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
                dispatch({
                    type: INVALID_EMAIL,
                    payload: error.code
                }) ;
            }
            if (error.code === 'auth/weak-password') {
            console.log('weak-password');
                dispatch({
                    type: WEAK_PASSWORD,
                    payload: error.code
                }) ;
            }
            
        console.error(error);
        dispatch({
            type: ERROR,
            payload: 'error'
        }) ;
    
        });

    }
    
    }
    return {
        type: ERROR, 
        payload: 'password and confirm password don\'t match'
    };

};

export const signIn = ({email, password}) => {
    return(dispatch) => {
        if(email != '' && password != ''){
            auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                dispatch( {
                    type: SIGNIN_USER,
                    payload: res.user.user
                });
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: ERROR,
                    payload: 'auth/user-not-found'
                });
            }) 
        }
        dispatch({
            type: ERROR,
            payload: 'error'
        });
        
    }
}
// const userDocument = firestore().collection('Users').doc('ABC');

// export const createDocument = () => {
    
//     return {
//         type: ERROR,
//         payload: 'CREATE DOCUMENT fire'
//     }
// }