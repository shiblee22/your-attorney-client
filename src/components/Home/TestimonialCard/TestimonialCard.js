import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({review}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <div className="card p-3">
                <p className="color-background">{review.review}</p>
                <div className="row">
                    <img src={review.imgUrl} alt="" className="col-4 offset-1 testimonial-img"/>
                    <div className="col-7 ps-3">
                        <h5 className="mb-0 color-brand">{review.userName}</h5>
                        <p className="color-background"><em>{review.designation}</em></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;