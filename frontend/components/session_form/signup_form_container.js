import { connect } from "react-redux";
import SessionForm from "./session_form"
import { createNewUser } from "../../actions/session_actions";

const mSTP = (state,ownProps) => {
    return {
        errors: state.sessions,
        formType: "Sign Up"
    }
}

const mDTP = dispatch => {
    return {
        processForm: formUser => dispatch(createNewUser(formUser))
    }
}

export default connect(mSTP,mDTP)(SessionForm);