import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch(`https://dry-mountain-67970.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
            <h3 className="text-center mt-5" style={{color: "#687693"}}>Services</h3>
            <div className="row mt-3">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                {
                    services.length === 0 && <div className="text-center mt-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Services;

// const services = [
//     {
//         name: "Criminal Law",
//         charge: 22,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.",
//         imgUrl: "https://i.ibb.co/ChN3hgW/auction.png"
//     },
//     {
//         name: "Divorce Law",
//         charge: 29,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.",
//         imgUrl: "https://i.ibb.co/34ZWL7j/law.png"
//     },
//     {
//         name: "Tax Law",
//         charge: 25,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.",
//         imgUrl: "https://i.ibb.co/h7L9jPX/compliant.png"
//     }
// ]