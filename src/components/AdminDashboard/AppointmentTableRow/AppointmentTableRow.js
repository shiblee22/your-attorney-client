import React, { useState } from 'react';

const AppointmentTableRow = ({ ap }) => {
    const [status, setStatus] = useState({status: ap.status})

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
        fetch(`https://dry-mountain-67970.herokuapp.com/updateStatus/${ap._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: e.target.value})
            })
                .then(res => console.log(res))
    }
    return (
        <tr>
            <td>{ap.userName}</td>
            <td>{ap.email}</td>
            <td>{ap.serviceName}</td>
            <td>{ap.paymentMethod}</td>
            <td>
                <select value={status.status} onChange={(e)=> handleStatusChange(e)} className="btn btn-outline-success dropdown">
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default AppointmentTableRow;