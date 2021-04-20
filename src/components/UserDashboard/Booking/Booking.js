import React from 'react';
import Services from '../../Home/Services/Services';
import SideBar from '../../Shared/SideBar/SideBar';

const Booking = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                    <h3 className="pt-3 color-background">Book Appointment</h3>
                    <Services></Services>
                </div>
            </div>
        </div>
    );
};

export default Booking;