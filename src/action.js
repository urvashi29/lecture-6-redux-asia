import axios from 'axios';
import * as actions from './actionType';

//action methods
export const onIncrement = (val) => {
    return {
        type: actions.INC,
        payload: val
    }
}

export const onDecrement = (val) => {
    return {
        type: actions.DEC,
        payload: val
    }
}

//action creators
export const onGetPosts = () => {
    return (dispatch) => {
        let url = 'https://jsonplaceholder.typicode.com/posts/';
        axios.get(url).then((res) => {
            dispatch(
                // self-invoking 
                ((data) => {
                    return {
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse : data.slice(0, 8)
                        }
                    }
                })(res.data)

            )
        }).catch(err => console.log(err))
    }
}


export const onGetUsers = () => {
    return (dispatch) => {
        let url = 'https://jsonplaceholder.typicode.com/users/';
        axios.get(url).then((res) => {
            dispatch(
                // self-invoking 
                ((data) => {
                    return {
                        type: actions.GET_USERS,
                        payload: {
                            httpResponse : data
                        }
                    }
                })(res.data)

            )
        }).catch(err => console.log(err))
    }
}

// add = () => {
    
// }
// add();


 // self-invoking 
// ((a, b) => {

// })(10, 20)