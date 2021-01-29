import Splash from "./splash";
import { connect } from "react-redux";
import { openModal, closeModal} from "../../actions/modal_actions";
import React from 'react';
import { receiveAllSongs } from "../../actions/song_actions";


const mSTP = (state, ownProps) => {
    debugger
    return {
        songs: Object.values(state.entities.songs)
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
        closeModal: () => dispatch(closeModal()),
        getAllSongs: () => dispatch(receiveAllSongs())
    }
}

export default connect(mSTP,mDTP)(Splash)