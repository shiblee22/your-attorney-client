import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import Payment from '../Payment/Payment';



const BookAppointment = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [appointment, setAppointment] = useState({})
    const history = useHistory();

    useEffect(() => {
        fetch(`https://dry-mountain-67970.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                const service = data.find(({ _id }) => _id === id);
                const newAppointment = {
                    userName: loggedInUser.name,
                    email: loggedInUser.email,
                    paymentMethod: "Card",
                    status: "Pending",
                    serviceName: service.name,
                    charge: service.charge,
                    serviceDetail: service.description,
                    serviceIcon: service.imgUrl
                }
                setAppointment(newAppointment);

            })
    }, [id, loggedInUser])

    const handlePaymentSuccess = paymentId => {
        const newAppointment = {...appointment, paymentId }
        fetch(`https://dry-mountain-67970.herokuapp.com/addAppointment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAppointment)
        })
            .then(res => history.push("/appointments"))

        
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                    <h3 className="pt-3 color-background">Book Appointment</h3>
                    {
                        appointment.serviceName && <form>
                            <div className="mb-1">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={appointment.userName} readOnly></input>
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={appointment.email} readOnly></input>
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Service</label>
                                <input type="text" className="form-control" value={appointment.serviceName} readOnly></input>
                            </div>
                            <div className="mt-3">
                                <Payment handlePayment={handlePaymentSuccess}></Payment>
                            </div>
                            <p className="mt-3">{`Your service will be charged $ ${appointment.charge}`}</p>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;