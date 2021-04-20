import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const UsersAppointment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`https://dry-mountain-67970.herokuapp.com/appointment/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [loggedInUser])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                <h3 className="pt-3 color-background">Your Appointments</h3>
                <div className="row">
                    {
                        appointments.map(item => <AppointmentCard key={item._id} appointment={item}></AppointmentCard>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default UsersAppointment;