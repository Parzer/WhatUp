import axios from 'axios';
import { FETCH_USER } from './types';

// es8 async/await allows us to write async code in a sync way
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: res.data});
    };

/**
export const fetchUser = () => {
    return function(dispatch) {
        axios
        .get('/api/current_user') // make sure that we have a proxy rule for handling this request;
        .then(res => dispatch({type: FETCH_USER, payload: res}))
    };
};
*/

/**
 * export const fetchUser = () => async dispatch => {
        dispatch({type: FETCH_USER, payload: await axios.get('/api/current_user')});
    };
*/
