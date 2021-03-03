import { connect } from "react-redux";
import User from "./user.jsx"
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { receiveArtistSongs } from "../../actions/song_actions";


const mSTP = (state,ownProps) => {
    const userSongs = Object.values(state.entities.songs)
    .filter(song => song.artist_id === parseInt(ownProps.match.params.userId));

    
    return {
        userSongs: userSongs,
        user: state.entities.users[ownProps.match.params.userId],
        users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        receiveArtistSongs: userId => dispatch(receiveArtistSongs(userId))
    }
}

export default connect(mSTP,mDTP)(User)