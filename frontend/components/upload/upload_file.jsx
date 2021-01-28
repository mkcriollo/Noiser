import React from 'react';


class UploadFile extends React.Component {
    // state = {  }
    render() { 
        if(this.props.page === 0){
        return ( 
            <div className="upload-main">
                <div className="upload-screen">
                    <h2>Drag and drop your tracks & albums here</h2>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className="inputfile"
                        accept=".mp3,audio/*"
                        onChange={this.props.changeUpload}
                    />
                    <label htmlFor="file">or choose files to upload</label>
                </div>
            </div>
         );
        } else {
            return null;
        }
    }
};
 
export default UploadFile;