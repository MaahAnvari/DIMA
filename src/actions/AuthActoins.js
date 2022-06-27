import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    CREATE_USER,
    INVALID_EMAIL,
    USER_EMAIL_EXIST,
    ERROR,
    SIGNIN_USER,
    WEAK_PASSWORD,
    SEX_CHANGED
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

export const sexChanged = (text) => {
    return {
        type: SEX_CHANGED,
        payload: text
    };
};

export const createUser = ({email, password, cpassword, name, sex}) => {
    if(password == cpassword){
        return (dispatch) =>{
             auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('User account created & signed in!', res.user);
                console.log('111111111',)
                firestore().collection('Users').add({ name: name, email: email, sex:sex, genre:[]}).then(() => { console.log('User added!',) });
                firestore().collection('Users').where('email', '==', email).get().then(documentSnapshot => {
                    dispatch( {
                        type: CREATE_USER,
                        payload: documentSnapshot.docs[0]
                    });
                  });
                
                // dispatch( {
                //     type: CREATE_USER,
                //     payload: res.user
                // });
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
            const document = firestore().collection('Users').where('email', '==', email).get().then(documentSnapshot => {
              });
            auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                const document = firestore().collection('Users').where('email', '==', email).get().then(documentSnapshot => {
            
                    dispatch( {
                        type: SIGNIN_USER,
                        payload: documentSnapshot.docs[0]
                    });
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