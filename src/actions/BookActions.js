

import { Actions } from 'react-native-router-flux';
import { 
    GET_GENRE_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    SEARCH_CHANGED,
    GET_NEW_EBOOK,
    GET_GENRE_AUDIOBOOK,
    GET_TOP_TEN_AUDIOBOOK,
    GET_FREE_EBOOK,
    GET_COUNTRY_AUDIOBOOK,
    GET_NEW_AUDIOBOOK,
    GET_FREE_AUDIOBOOK,
    GET_SEARCH_EBOOK,
    ERROR, RESET,
    SELECT_BOOK,
    GET_EBOOK_DOWNLOAD_LINK,
    UPDATE_FAVORITE_BOOK
    
} from './types';


import storage, { firebase, getStorage, ref } from '@react-native-firebase/storage';
import axios from 'axios';

export const searchChanged = (text) => {
    return {
        type: SEARCH_CHANGED,
        payload: text
    };
};
export const selectBook = (text) => {
    console.log('seleeeeeeeeeeeect')
    return {
        type: SELECT_BOOK,
        payload: text
    };
};

export const searchBook = ({media, entity, attribute, term, sort, country, searchKey}) => {//{entity, term, limit, attribute}
    console.log('hello books')

    const param = '?'+
            ('media='+media+'&')+
            ('attribute='+attribute+'&')+
            ('term='+term+'&')+ 
            ('sort='+sort+'&')+ 
            ('country='+country+'&')+ 
            // ('entity='+entity+'&')+ 
            ('limit='+'25')
    return (dispatch) =>{
    fetch('https://itunes.apple.com/search'+ param)
        .then((response) => response.json())
            .then((results)=> {
                // console.log('resultssss:    ', results)
                if(searchKey== '1') {
                    dispatch({ 
                        type: GET_SEARCH_EBOOK,
                        payload: results
                    })
                    Actions.searchPage();
                }
                else if(media == 'ebook') {
                    if(attribute == 'genreIndex'){
                        dispatch({ 
                            type: GET_GENRE_EBOOK,
                            payload: results
                        })
                    }
                    if(term == 'top10'){
                        dispatch({ 
                            type: GET_TOP_TEN_EBOOK,
                            payload: results
                        })
                    }
                    if(term == 'italy'){
                        dispatch({ 
                            type: GET_COUNTRY_EBOOK,
                            payload: results
                        })
                    }
                    if(term == '2022'){
                        dispatch({ 
                            type: GET_NEW_EBOOK,
                            payload: results
                        })
                    }
                } else if( media == 'audiobook') {
                    if(attribute == 'genreIndex'){
                        dispatch({ 
                            type: GET_GENRE_AUDIOBOOK,
                            payload: results
                        })
                    }
                    if(term == 'top10'){
                        dispatch({ 
                            type: GET_TOP_TEN_AUDIOBOOK,
                            payload: results
                        })
                    }
                    if(term == 'free'){
                        dispatch({ 
                            type: GET_FREE_AUDIOBOOK,
                            payload: results
                        })
                    }
                    if(term == '2022'){
                        dispatch({ 
                            type: GET_NEW_AUDIOBOOK,
                            payload: results
                        })
                    }
                }
            })
            .catch((error) => console.error('error',error));
            
            
    }
}

export const getFreeBooks = ({media, term}) => {

    const param = '?'+
            ('media='+media+'&')+
            // ('attribute='+attribute+'&')+
            ('term='+term+'&')+ 
            // ('sort='+sort+'&')+ 
            // ('country='+country+'&')+ 
            // ('entity='+entity+'&')+ 
            ('limit='+'10')
    return (dispatch) =>{
    fetch('https://itunes.apple.com/search'+ param)
        .then((response) => response.json())
            .then((results)=> {
                if(media == 'ebook') {
                        dispatch({ 
                            type: GET_FREE_EBOOK,
                            payload: results
                        })
                    
                } if( media == 'audiobook') {
                        dispatch({ 
                            type: GET_FREE_AUDIOBOOK,
                            payload: results
                        })
                    
                }
            console.log('rrrr',term,'m', results)})
            .catch((error) => console.error('error',error));
            
            
    }
}


// const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };



export const downloadBook = ({name}) => {


    const store= firebase.storage();
    console.log(store)
    
    const gsReference = store.ref('Books/'+name+'.pdf').getDownloadURL().then(url => {
    console.log('urlllll',url);
    });
    return {
        type: ERROR,
        payload: name
    };
}

export const resetFree = () => {
    return {
        type: RESET,
        payload: 'reset'
    };
}

export const getPdfLink = (item) => {

    const store= firebase.storage();
    // console.log(store)
    return (dispatch) =>{
    const gsReference = store.ref('Books/'+item.trackCensoredName+'.pdf').getDownloadURL().then(url => {

    console.log('urlllllllll',url)
    dispatch({
        type: GET_EBOOK_DOWNLOAD_LINK,
        payload: url
    });
})
}
    return{
        url: ERROR,
        payload: 'Error'
    }
}


// import firestore from '@react-native-firebase/firestore';
// import storage, { firebase, getStorage, ref } from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';
export const updateFavoriteBooks = ({id, favorites}) => {
    console.log('ooooooomad to save booooook change', id, favorites)
        const document = firestore().collection('Users').doc(id).update({
            favorites: favorites,
          })
          .then(() => {
            console.log('User updated!');
          });
          return {
            type: UPDATE_FAVORITE_BOOK,
            payload: favorites
        };
    }
export const deleteFavoriteBook = (favorites) => {

    

    return {
        type: UPDATE_FAVORITE_BOOK,
        payload: favorites
    };

}