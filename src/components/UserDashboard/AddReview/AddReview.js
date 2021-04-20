import React, { useContext, useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import { UserContext } from '../../../App';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewData, setReviewData] = useState({
        userName: loggedInUser.name,
        imgUrl: loggedInUser.picture,
        designation: "",
        review: ""
    })

    const handleNameChange = (e) => {
        const newReviewData = {...reviewData};
        newReviewData['designation'] = e.target.value;
        setReviewData(newReviewData);
    }

    const handleReviewChange = (e) => {
        const newReviewData = {...reviewData};
        newReviewData['review'] = e.target.value;
        setReviewData(newReviewData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://dry-mountain-67970.herokuapp.com/addReview`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
                .then(res => console.log(res))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 bg-light ms-0">
                    <h3 className="pt-3 color-background">Add Review</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={loggedInUser.name} readOnly></input>
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Comapany's Name, Designation</label>
                            <input type="text" className="form-control" value={reviewData.designation} onChange={handleNameChange} required></input>
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Review</label>
                            <textarea className="form-control" value={reviewData.review} onChange={handleReviewChange} rows="3" required></textarea>
                        </div>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;