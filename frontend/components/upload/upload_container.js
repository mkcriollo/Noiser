import { connect } from "react-redux";
import { createNewSong } from "../../actions/song_actions";
import Upload from "./upload";

export const mSTP = (state,ownProps) => {
    return {
      currentUser: state.entities.users[state.session.id]
    }
}

export const mDTP = dispatch => {
    return {
        createSong: song => dispatch(createNewSong(song))
    }
}

export default connect(mSTP,mDTP)(Upload)