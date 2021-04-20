import React, { useEffect, useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import AppointmentTableRow from '../AppointmentTableRow/AppointmentTableRow';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch("https://dry-mountain-67970.herokuapp.com/appointments")
            .then(res => res.json())
            .then(data => setAppointments(data))
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
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map(ap => <AppointmentTableRow key={ap._id} ap={ap}></AppointmentTableRow>
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

export default AppointmentList;