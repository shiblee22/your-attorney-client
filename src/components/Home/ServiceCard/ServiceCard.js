import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const history = useHistory();
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <div className="card text-center service-card" onClick={()=> history.push(`/bookAppointment/${service._id}`)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="card-body">
                    <img className="img-fluid" style={{height:"3rem"}} src={service.imgUrl} alt=""/>
                    <h5 className="color-background mt-3">{service.name}</h5>
                    <h6 className="color-brand">${service.charge}/hour</h6>
                    <p className="color-background">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;