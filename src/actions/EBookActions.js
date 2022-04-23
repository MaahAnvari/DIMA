

import { Actions } from 'react-native-router-flux';
import { 
    GET_GENRE_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    
} from './types';

import axios from 'axios';

export const searchEbook = ({media, entity, attribute, term, sort, country}) => {//{entity, term, limit, attribute}
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
        // console.log('https://itunes.apple.com/search'+ param)
        // console.log('https://itunes.apple.com/search?term=jack+johnson&limit=10' )
    fetch('https://itunes.apple.com/search'+ param)
        .then((response) => response.json())
            .then((results)=> {
                // console.log('resultssss:    ', results)
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
            console.log('rrrr',attribute, term, country,'m', results)})
            .catch((error) => console.error('error',error));
            
            
    }
}
