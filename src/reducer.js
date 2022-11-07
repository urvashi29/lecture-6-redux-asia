import * as actions from './actionType';

//central storage(state)
const initState = {
    count: 0,
    posts: [],
    users: []
}

const reducer = (state = initState, action) => {
    //action is always a object

    switch (action.type) {
        case actions.INC:
            return { ...state, count: state.count + action.payload }
        case actions.DEC:
            return { ...state, count: state.count - action.payload }
        case actions.GET_POSTS:
            return { ...state, posts: action.payload.httpResponse }
        case actions.GET_USERS:
            return { ...state, users: action.payload.httpResponse }
        default:
            return state;
    }


}

export default reducer;

