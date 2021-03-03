import React from 'react';
import { Link } from "react-router-dom"


class SuccessFile extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {play: false}
        // this.audio = new Audio(props.state.songFile)

        // this.togglePlay = this.togglePlay.bind(this)
    }
    
    
    // audio = new Audio(this.props.state.songFile)

    // componentDidMount() {
    //     this.audio.addEventListener('ended', () => this.setState({ play: false }));
    // }

    // componentWillUnmount() {
    //     this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    // }

    // togglePlay = () => {
    //     this.setState({ play: !this.state.play }, () => {
    //         this.state.play ? this.audio.play() : this.audio.pause();
    //     });
    // }
   
    
    render() { 
        
        if(this.props.state.page === 2){
        return ( 
        <div>
            <div className="success-main">
                    {/* <div>
                        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
                    </div> */}
                <div className="current-song-success">
                        <img className="upload-song-pic" src={this.props.state.photoUrl} alt=""/>
                        <div className="upload-info">
                            <div className="upload-username">{this.props.currentUser.username}</div>
                            <div className="upload-song-title">{this.props.state.title}</div>
                            <p className="upload-complete">Upload Complete</p>
                            <Link className="link-to-song" to={`/songs/${this.props.state.songId}`}>Go to your Track</Link>
                        </div>
                        <div className="success-message">Congrats your song is upload and ready for the world to hear</div>
                </div>
            </div>
        </div> 
        );
        } else {
            return null;
        }
    }
}
 
export default SuccessFile;