import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import {closeModal,openModal} from "../../actions/modal_actions"
import React from 'react';
import { receiveErrors, clearErrors } from "../../actions/session_actions";

const mSTP = (state,ownProps) => {
    return {
        errors: state.errors.sessionErrors,
        formType: 'Login'
    }
}

const mDTP = dispatch => {
    return {
        processForm: formUser => dispatch(login(formUser)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: error => dispatch(receiveErrors(error)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP,mDTP)(SessionForm);