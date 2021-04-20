import { connect } from "react-redux";
import Discover from "./discover"
import { receiveAllSongs } from "../../actions/song_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state,ownProps) => {
  
    return {
      currentUser: state.entities.users[state.session.id],
      songs: Object.values(state.entities.songs),
      users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
  
    return {
      getAllSongs: () => dispatch(receiveAllSongs()),
      fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP,mDTP)(Discover)