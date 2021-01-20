import { logout } from "../../actions/session_actions";
import Greeting from "./greeting"
import {connect} from "react-redux"

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => {
    return {
        logout: formUser => dispatch(logout(formUser))
    }
}

export default connect(mSTP,mDTP)(Greeting)