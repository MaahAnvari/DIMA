import { 
    GET_GENRE_EBOOK,
    GET_SEARCH_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    GET_NEW_EBOOK,
    SEARCH_CHANGED,
    GET_SEARCH,
    GET_FREE_EBOOK,
    RESET,
    SELECT_BOOK
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    top10:[],
    genre:[],
    search:[],
    country:[],
    newB:[],
    error:'',
    searchKey:'',
    free:[],
    selectedBook:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('Book r', action,);
    console.log('Book rrrr', state.free);
    
    switch (action.type) {
        case GET_GENRE_EBOOK:
            return { ...state, genre: action.payload.results }; 
        case GET_SEARCH_EBOOK:
            return { ...state, search: action.payload.results }; 
        case GET_TOP_TEN_EBOOK:
            return { ...state, top10: action.payload.results }; 
        case GET_FREE_EBOOK:{
            const f = state.free;
            f.push(action.payload.results[0])
            return { ...state, free: f }; 
        }
        case GET_COUNTRY_EBOOK:
            return { ...state, country: action.payload.results }; 
        case GET_NEW_EBOOK:
            return { ...state, newB: action.payload.results }; 
        case SEARCH_CHANGED:
            return { ...state, searchKey: action.payload }; 
        case GET_SEARCH:
            return { ...state, search: action.payload }; 
        case SELECT_BOOK:
            return { ...state, selectedBook: action.payload }; 
        case RESET:
            return { ...state, free: [] }; 
        default:
            return state;
    }
};
