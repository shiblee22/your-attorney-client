import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SideBar from '../../Shared/SideBar/SideBar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const history = useHistory();


    const onSubmit = data => {
        const serviceData = {
            name: data.serviceTitle,
            charge: data.charge,
            description: data.description,
            imgUrl: imageURL
        };
        if (imageURL) {
            fetch(`https://dry-mountain-67970.herokuapp.com/addService`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            })
                .then(res => history.push("/"))
        } else {
            alert('Please wait untill the image being uploaded.')
        }
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '537807002606c3b81736b3686577b200');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                    <h3 className="pt-3 color-background">Add Service</h3>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row lightgray-box p-2 mt-3">
                                <div className="mb-3 col-sm-12 col-lg-6">
                                    <label htmlFor="serviceTitle" className="form-label">Service Title</label>
                                    <input name="serviceTitle" id="serviceTitle" className="form-control" ref={register({ required: true })} />
                                </div>
                                <div className="mb-3 col-sm-12 col-lg-6">
                                    <label htmlFor="charge" className="form-label">Charge</label>
                                    <input name="charge" id="charge" className="form-control" ref={register({ required: true })} />
                                </div>
                                <div className="mb-3 col-sm-12 col-lg-6">
                                    <label htmlFor="description" className="form-label">Service Description</label>
                                    <input name="description" id="description" className="form-control" ref={register({ required: true })} />
                                </div>
                                <div className="mb-3 col-sm-12 col-lg-6">
                                    <label htmlFor="icon" className="form-label">Service Icon</label>
                                    <input name="icon" type="file" className="form-control" onChange={handleImageUpload} />
                                </div>
                            </div>
                            <div className="text-end mt-3 p-3">
                                <input type="submit" className="btn btn-success" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;