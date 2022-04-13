import React from 'react';

const UploadAssignment = () => {
    return <div>

        <h1 className='text-center'>Upload Assignment</h1>
        <br /><br />
        


        <div className="card " style={{width: "40%", marginLeft:"auto", marginRight:"auto", border: "2px solid #00517B", borderRadius:"10px"}}>
            <div className="card-body text-center">
                <h5 className="card-title">COP ASSIGNMENT</h5>
                <h6 className="card-subtitle mb-2 text-muted">09-09-2021 to 25-09-2021</h6>
                <div style={{border: "2px solid #00517B"}}></div><br />
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <form>
                <div className="form-group">
                    {/* <label htmlFor="exampleFormControlFile1">Example file input</label> */}
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" style={{marginLeft:"auto", marginRight:"auto"}}/>
                </div>
            </form>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
                <br />
                <div style={{border: "2px solid #00517B"}}></div><br />
                <button type="button" className="btn btn-primary">Submit</button>
            </div><br />
        </div>
    </div>;
};

export default UploadAssignment;
