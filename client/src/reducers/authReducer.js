import { FETCH_USER } from '../actions/types';

// authReducer only returns null, false, user model
export default function(state = null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER: //before returning actions payload. Consider its lifecycle & different returned values
            return action.payload || false;
        default:
            return state;
    }
}