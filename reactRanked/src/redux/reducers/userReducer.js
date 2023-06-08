import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default function loginUser(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESS:
            var checkUser = state.users.filter(c => c.password === action.payload.password && c.email === action.payload.email);
            if (checkUser.length > 0) {
                state.currentUser = checkUser[0];
                return state;
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export default function registerUser(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REGISTER_USER:
            var checkUser = state.users.some(c => c.email === action.payload.email);
            if (checkUser) {

                return state;
            }
            else {
                state.users.push(action.payload);
                return state;
            }
        default:
            return state;
    }
}

export default function logoutUser(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGOUT_USER:
            let user = {
                id: 0,
                name: "",
                password: "",
                email: "",
                role: ""
            };
            state.currentUser = user;
            return state;
        default:
            return state;
    }
}

