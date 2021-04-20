import React, { useEffect, useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import ManageServiceRow from '../ManageServiceRow/ManageServiceRow';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://dry-mountain-67970.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                    <h3 className="pt-3 color-background">Appointment List</h3>
                    <div className="lightgray-box p-2 mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Charge</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <ManageServiceRow key={service._id} service={service}></ManageServiceRow>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageService;