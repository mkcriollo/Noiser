import React from 'react';
import NavBar from "../navbar/navbar_container";
import FileDetails from './file_details';
import SuccessFile from './success_file';
import UploadFile from "./upload_file";

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            artist_id: props.currentUser.id,
            title: "",
            genre: "",
            description: "",
            songFile: null,
            photoFile: null,
            photoUrl: "",
            page: 0,
            songId: 0
         }

        this.handleFile = this.handleFile.bind(this)
        this.changeUpload = this.changeUpload.bind(this)
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleFile(e){
        e.preventDefault();
        const file = e.target.files[0];
        if(file){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                this.setState({ photoFile: file, photoUrl: fileReader.result })
            };
        }
    }




    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        formData.append('song[artist_id]', this.state.artist_id);
        formData.append('song[song]', this.state.songFile);
        if(this.state.photoFile){
            formData.append('song[photo]', this.state.photoFile);
        }
        
        this.props.createSong(formData).then(song => {
            this.setState({
                page: 2,
                songId: song.song.id
            })
        })
    }


    changeUpload(e){
        e.preventDefault()
        let currentFile = e.target.files[0]
        
        if(currentFile && currentFile.type === "audio/mpeg"){ 
            
            this.setState({
                page: 1,
                title: currentFile.name.split(".")[0],
                songFile: currentFile
            });
        }
    }
   
    render() { 
        return ( 
            <div>
                <NavBar />
                <div className="app-discover1">
                    <div className="creators-tab">
                        <ul>
                            <li id="upload-only">Upload</li>
                            <li>Mastering</li>
                            <li>Your Tracks</li>
                            <li>Insights</li>
                            <li>Pro Plans</li>
                        </ul>
                    </div>
                    <div>
                        <UploadFile 
                            changeUpload={this.changeUpload}
                            page={this.state.page}
                        />
                        <FileDetails 
                            changeUpload={this.changeUpload}
                            state={this.state}
                            update={this.update}
                            handleFile={this.handleFile}
                            handleSubmit={this.handleSubmit}
                        />
                        <SuccessFile 
                            state={this.state}
                            currentUser={this.props.currentUser}
                        />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Upload;