import { connect } from "react-redux";
import Discover from "./discover"
import { receiveAllSongs } from "../../actions/song_actions";

const mSTP = (state,ownProps) => {
  
    return {
      currentUser: state.entities.users[state.session.id],
      songs: Object.values(state.entities.songs)
    }
}

const mDTP = dispatch => {
    return {
      getAllSongs: () => dispatch(receiveAllSongs())
    }
}

export default connect(mSTP,mDTP)(Discover)