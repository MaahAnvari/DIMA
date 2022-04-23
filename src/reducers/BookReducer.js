import { 
    GET_GENRE_EBOOK,
    GET_SEARCH_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    top10:[],
    genre:[],
    search:[],
    country:[],
    error:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('Book r', action);
    switch (action.type) {
        case GET_GENRE_EBOOK:
            return { ...state, genre: action.payload.results }; 
        case GET_SEARCH_EBOOK:
            return { ...state, search: action.payload.results }; 
        case GET_TOP_TEN_EBOOK:
            return { ...state, top10: action.payload.results }; 
        case GET_COUNTRY_EBOOK:
            return { ...state, country: action.payload.results }; 
        default:
            return state;
    }
};
