import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://dry-mountain-67970.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="py-5">
            <div className="container">
                <h3 className="text-center color-background">What Our Clients Said</h3>
                <div className="row mt-5">
                    {
                        reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)
                    }
                    {
                    reviews.length === 0 && <div className="text-center mt-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

// const testimonial = [
//     {
//         userName: "Elon Musk",
//         designation: "CEO, Tesla Motors",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit repellat, quod alias fugit minima natus explicabo et quis earum.",
//         imgUrl: "https://i.ibb.co/7Kxt9GN/elon-musk.jpg"
//     },
//     {
//         userName: "Bill Gates",
//         designation: "CEO, Microsoft",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit repellat, quod alias fugit minima natus explicabo et quis earum.",
//         imgUrl: "https://i.ibb.co/fp0324X/bill-gates.jpg"
//     },
//     {
//         userName: "Steve Jobs",
//         designation: "CEO, Apple",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit repellat, quod alias fugit minima natus explicabo et quis earum.",
//         imgUrl: "https://i.ibb.co/bgSySDR/steve-jobs.jpg"
//     }
// ]