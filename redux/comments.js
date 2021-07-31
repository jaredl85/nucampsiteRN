import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const newComment = action.payload;
            newComment.id = state.comments.length;
            /*note: in a production environment, assigning id by array.length only
            works when the array can only be incremented OR deincremented (but it
            doesn't work when the array has both capabilities). */
            return {...state, comments: state.comments.concat(newComment) };


        default:
            return state;
    }
};