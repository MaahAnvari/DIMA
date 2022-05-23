

import { Actions } from 'react-native-router-flux';
import { 
    GET_GENRE_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    SEARCH_CHANGED,
    GET_NEW_EBOOK,
    GET_GENRE_AUDIOBOOK,
    GET_TOP_TEN_AUDIOBOOK,
    GET_COUNTRY_AUDIOBOOK,
    GET_NEW_AUDIOBOOK,
    GET_FREE_AUDIOBOOK,
    GET_SEARCH_EBOOK,
    
} from './types';

import axios from 'axios';

export const searchChanged = (text) => {
    return {
        type: SEARCH_CHANGED,
        payload: text
    };
};

export const searchBook = ({media, entity, attribute, term, sort, country, searchKey}) => {//{entity, term, limit, attribute}
    console.log('hello books')
    // axios({
    //     method: 'get',
    //     url: 'https://itunes.apple.com/lookup?id=909253'
    //   }).then((response) => {
    //     console.log(response);
    //   });
    const requestOptions = {
        method: 'GET',
        // headers: { 
        //    'Content-Type': 'application/json',
        //    'accept': 'application/json',
        //    'Authorization': 'Bearer '+ access,
        //    'User-Agent': 'Mobile'
        // },
    };
    console.log('search in genre')
    const param = '?'+
            ('media='+media+'&')+
            ('attribute='+attribute+'&')+
            ('term='+term+'&')+ 
            ('sort='+sort+'&')+ 
            ('country='+country+'&')+ 
            // ('entity='+entity+'&')+ 
            ('limit='+'10')
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
            console.log('rrrr',attribute, term, country,'m', results)})
            .catch((error) => console.error('error',error));
            
            
    }
}
