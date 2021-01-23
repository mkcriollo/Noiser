import Splash from "./splash";
import { connect } from "react-redux";
import { openModal, closeModal} from "../../actions/modal_actions";
import React from 'react';


const mSTP = (state, ownProps) => {
    return {

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
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP,mDTP)(Splash)