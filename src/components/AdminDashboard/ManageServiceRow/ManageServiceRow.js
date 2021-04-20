import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageServiceRow = ({service}) => {
    const [rowStyle,setRowStyle] = useState({});

    const deleteAppointment = (e) => {
        fetch(`https://dry-mountain-67970.herokuapp.com/deleteService/${service._id}`, {
            method: 'DELETE'
        }).then(() => {
            setRowStyle({display: "none"})
        }).catch(err => {
            console.error(err)
        });
    }
    return (
        <tr style={rowStyle}>
            <td>{service.name}</td>
            <td>{service.charge}</td>
            <td><button className="btn-danger rounded" onClick={(e) => deleteAppointment(e) }><FontAwesomeIcon icon={faTrashAlt} /></button></td>
        </tr>
    );
};

export default ManageServiceRow;