import { logout } from "../../actions/session_actions";
import Greeting from "./greeting"
import {connect} from "react-redux";
import {openModal} from "../../actions/modal_actions"

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => {
    return {
        logout: formUser => dispatch(logout(formUser)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mSTP,mDTP)(Greeting)