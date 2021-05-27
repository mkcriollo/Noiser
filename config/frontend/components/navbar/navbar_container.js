import { connect } from "react-redux"
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: formUser => dispatch(logout(formUser)),
    }
}

export default connect(mSTP,mDTP)(NavBar)