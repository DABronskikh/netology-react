import React, {useRef} from 'react'

export default function FileChooser() {
    const fileRef = useRef();

    const handleSubmit = evt => {
        evt.preventDefault();
        console.dir(fileRef.current.files);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">FileChooser</label>
                <input className="form-control" type="file" id="formFile" ref={fileRef} />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Ok</button>
            </div>
        </form>
    )
}
