import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mSTP = (state,ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Login'
    }
}

const mDTP = dispatch => {
    return {
        processForm: formUser => dispatch(login(formUser))
    }
}

export default connect(mSTP,mDTP)(SessionForm);