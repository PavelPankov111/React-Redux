import {CREATE_POST, FETCHED_POST} from './types'

const initState = {
    posts: [],
    fetchedPosts: []
}

export const postReducer = (state = initState, action) => {
    switch(action.type){
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
        case FETCHED_POST:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}