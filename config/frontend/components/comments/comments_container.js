import { connect } from "react-redux";
import Comments from "./comments"
import { fetchUserComments, deleteComment } from "../../actions/comment_actions";

const mSTP = (state,ownProps) => {
    const userComments = Object.values(state.entities.comments)
    .filter(comment => comment.author_id === parseInt(ownProps.match.params.userId)).reverse();

    return {
        songs: state.entities.songs,
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        userComments: userComments
    }
}

const mDTP = dispatch => {
    return {
        fetchUserComments: userId => dispatch(fetchUserComments(userId)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    };
};

export default connect(mSTP,mDTP)(Comments);