import * as CommentApiUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
};

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};


// thunk actions

export const fetchSongComments = songId => dispatch => {
    debugger
    return CommentApiUtil.fetchSongsComments(songId)
    .then(comments => dispatch(receiveComments(comments)));
};

export const fetchUserComments = userId => dispatch => {
    return CommentApiUtil.fetchUserComments(userId)
    .then(comments => dispatch(receiveComments(comments)));
};

export const createComment = comment => dispatch => {
    debugger
    return CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));
};

export const deleteComment = commentId => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));
};