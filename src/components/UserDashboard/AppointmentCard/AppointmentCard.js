import React from 'react';

const AppointmentCard = ({ appointment }) => {
    const { serviceDetail, serviceName, serviceIcon, status } = appointment;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <div className="card p-3">
                <div className="row" style={{ height: "60px" }}>
                    <div className="col-6">
                        <img src={serviceIcon} alt="" className="img-fluid" style={{ width: "60px" }} />
                    </div>

                    <div className="col-6">
                       <h5 className="border border-success color-background py-2 rounded-3 text-center">{status} </h5>
                    </div>
                </div>
                <div className="pt-3">
                    <h5 className="color-brand">{serviceName}</h5>
                    <p className="color-background">{serviceDetail}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;