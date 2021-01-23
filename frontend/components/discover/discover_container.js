import { connect } from "react-redux";
import Discover from "./discover"

const mSTP = (state,ownProps) => {
    return {
      currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP,mDTP)(Discover)