import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faClipboard, faEdit, faList, faPlus, faThLarge, faUserCog, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch(`https://dry-mountain-67970.herokuapp.com/admin/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [loggedInUser])

    return (
        <nav className="nav flex-column rounded" style={{ minHeight: "100vh", backgroundColor: "#9A6E51" }}>
            <Link className="nav-link text-light fs-2" to="/">Your Attorney</Link>
            <Link className="nav-link text-light fs-5" to="/booking"><FontAwesomeIcon icon={faUserEdit} /> Booking</Link>
            <Link className="nav-link text-light fs-5" to="/appointments"><FontAwesomeIcon icon={faAddressCard} /> Your Appointments</Link>
            <Link className="nav-link text-light fs-5" to="/addReview"><FontAwesomeIcon icon={faEdit} /> Add Review</Link>
            {
                (admin.length > 0) && <div>
                    <Link className="nav-link text-light fs-5" to="/appointmentList"><FontAwesomeIcon icon={faList} /> Appointment List</Link>
                    <Link className="nav-link text-light fs-5" to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                    <Link className="nav-link text-light fs-5" to="/manageService"><FontAwesomeIcon icon={faClipboard} /> Manage Service</Link>
                    <Link className="nav-link text-light fs-5" to="/addAdmin"><FontAwesomeIcon icon={faUserCog} /> Make Admin</Link>
                </div>
            }
        </nav>
    );
};

export default SideBar;