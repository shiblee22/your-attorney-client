import React, { useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://dry-mountain-67970.herokuapp.com/addAdmin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: admin})
        })
            .then(res => console.log(res))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                    <h3 className="pt-3 color-background">Make Admin</h3>
                    <form onSubmit={(e)=> handleSubmit(e)}>
                        <div className="mb-1">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={admin} onChange={(e)=> setAdmin(e.target.value)} required></input>
                        </div>
                        <button className="btn btn-success mt-3" type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddAdmin;