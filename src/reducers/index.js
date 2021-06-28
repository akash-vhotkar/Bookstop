import { combineReducers} from 'redux';
import AUTH from './Auth';
import POSTS from './posts';
import PROFILE from './profile';
import SEARCHCREDENTIAL  from './Searchcredentials';
import ALLFILTERS from './Allfilters';
import BIDS from './Bid'
export const reducers =  combineReducers({
    AUTH,
    POSTS,
    PROFILE,
    SEARCHCREDENTIAL,
    ALLFILTERS,
    BIDS
    

})