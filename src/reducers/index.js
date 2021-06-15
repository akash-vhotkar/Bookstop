import { combineReducers} from 'redux';
import AUTH from './Auth';
import POSTS from './posts';
import PROFILE from './profile';
import SEARCHCREDENTIAL  from './Searchcredentials';
export const reducers =  combineReducers({
    AUTH,
    POSTS,
    PROFILE,
    SEARCHCREDENTIAL
    

})