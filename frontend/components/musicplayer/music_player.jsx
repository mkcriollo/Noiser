import React from 'react';


class Musicplayer extends React.Component {
 
    // componentDidMount() {
    //     this.props.getAllSongs()
    //     debugger
    // }


    render() { 
        return ( 
            <figure className="sound-bar">
                <audio
                    className="audio-bar"
                    controls
                    src={this.props.song}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <img src={this.props.photo} alt=""/>
                {/* <figcaption>{this.props.title}</figcaption> */}
            </figure>
         );
    }
}
 
export default Musicplayer;