import React, { Component, createRef } from 'react'

export class FileChooserClassBased extends Component {

    constructor(props){
        super(props);
        this.fileRef = createRef();
    }

    handleSubmit = evt => {
        evt.preventDefault();
        console.dir(this.fileRef.current.files);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="formFile" class="form-label">FileChooserClassBased</label>
                    <input className="form-control" type="file" id="formFile" ref={this.fileRef} />
                </div>
                <div class="mb-3">
                    <button type="submit" className="btn btn-primary">Ok</button>
                </div>
            </form>
        )
    }
}

export default FileChooserClassBased
