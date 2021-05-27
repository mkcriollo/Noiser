import { connect } from "react-redux";
import SessionForm from "./session_form"
import { createNewUser } from "../../actions/session_actions";
import React from 'react';
import { closeModal, openModal } from "../../actions/modal_actions";
import { receiveErrors, clearErrors} from "../../actions/session_actions";

const mSTP = (state,ownProps) => {
    return {
        errors: state.errors.sessionErrors,
        formType: "signup"
    }
}

const mDTP = dispatch => {
    return {
        processForm: formUser => dispatch(createNewUser(formUser)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP,mDTP)(SessionForm);