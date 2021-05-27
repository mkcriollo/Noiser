import React from 'react';

class FileDetails extends React.Component {
    // state = {  }
    render() { 
        const uploadButton = !this.props.state.photoUrl ? 
            <div className="upload-button-holder">
                <input
                    type="file"
                    className="upload-image"
                    id="upload-image"
                    name="upload-image"
                    accept="image/*"
                    onChange={this.props.handleFile}
                >
                </input>
                <label htmlFor="upload-image">Upload image</label>
            </div>
             : <div className="upload-button-holder">
                <input
                    type="file"
                    className="upload-image"
                    id="upload-image"
                    name="upload-image"
                    accept="image/*"
                    onChange={this.props.handleFile}
                >
                </input>
                <label htmlFor="upload-image">Update image</label>
            </div>

        const preview = this.props.state.photoUrl ? <img src={this.props.state.photoUrl} className="song-artwork-upload2"></img> : <span className="song-artwork-upload"></span>; 
        
        if(this.props.state.page === 1){
        return ( 
            <div className="file-details-main">
                <div className="basic-file-box">
                    <div className="file-header">
                        <h2>Basic Info</h2>
                        <h2>Metadata</h2>
                        <h2>Permissions</h2>
                    </div>
                    <div className="file-info">
                        <div className="picture-holder">
                            {preview}
                            {uploadButton}
                        </div>
                        <div className="song-details">
                            <p>Title</p>
                            <input type="text" defaultValue={this.props.state.title} onChange={this.props.update("title")} required/>
                            <p>Genre</p>
                            <select onChange={this.props.update("genre")}>
                                <option value="None">None</option>
                                <option value="Alternative Rock">Alternative Rock</option>
                                <option value="Throwbacks">Throwbacks</option>
                                <option value="Classical">Classical</option>
                                <option value="Country">Country</option>
                                <option value="Dance & EDM">Dance & EDM</option>
                                <option value="Dancehall">Dancehall</option>
                                <option value="Deep House">Deep House</option>
                                <option value="Disco">Disco</option>
                                <option value="Drum & Bass">Drum & Bass</option>
                                <option value="Dubstep">Dubstep</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Folk & Singer-Songwriter">Folk & Singer-Songwriter</option>
                                <option value="Hip-hop & Rap">Hip-hop & Rap</option>
                                <option value="House">House</option>
                                <option value="Indie">Indie</option>
                                <option value="Jazz & Blue">Jazz & Blue</option>
                                <option value="Latin">Latin</option>
                                <option value="Metal">Metal</option>
                                <option value="Piano">Piano</option>
                                <option value="Pop">Pop</option>
                                <option value="R&B">R&B</option>
                                <option value="Reggae">Reggae</option>
                                <option value="Reggaeton">Reggaeton</option>
                                <option value="Rock">Rock</option>
                                <option value="SoundTrack">SoundTrack</option>
                                <option value=">Techno">Techno</option>
                                <option value="Workout">Workout</option>
                                <option value="Trap">Trap</option>
                                <option value="Triphop">Triphop</option>
                                <option value="World">World</option>
                            </select>
                            <p>Description</p>
                            <textarea placeholder="Describe Your Track" cols="30" rows="10" onChange={this.props.update("description")}></textarea>
                        </div>
                    </div>
                    <div className="upload-footer">
                        <p>Required fileds</p>
                        <button className="cancel-button-upload">Cancel</button>
                        <button className="save-button-upload" onClick={this.props.handleSubmit} >Save</button>
                    </div>
                </div>
            </div>
         );
        } else {
            return null;
        }
    }
};
 
export default FileDetails;