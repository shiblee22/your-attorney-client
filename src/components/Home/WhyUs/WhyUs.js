import React from 'react';
import WhyUsCard from '../WhyUsCard/WhyUsCard';

const WhyUs = () => {
    const uniques = [
        {
            id: 1,
            tittle: "Skilled Attorneys",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fuga velit earum corporis voluptate aut fugit pariatur possimus reiciendis dolore.",
            imgUrl: "https://i.ibb.co/XsnTYDD/law-book.png"
        },
        {
            id: 2,
            tittle: "25 Years of Experience",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fuga velit earum corporis voluptate aut fugit pariatur possimus reiciendis dolore.",
            imgUrl: "https://i.ibb.co/ZdNDmQS/auction1.png"
        },
        {
            id: 3,
            tittle: "99% Case Win",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fuga velit earum corporis voluptate aut fugit pariatur possimus reiciendis dolore.",
            imgUrl: "https://i.ibb.co/q1LxN3b/file.png"
        }
    ]
    return (
        <div style={{ backgroundColor: "#9A6E51" }}>
            <div className="container mt-5">
                <h3 className="text-center text-white pt-5">Why You Will Choose Us</h3>
                <div className="row mt-3">
                    {
                        uniques.map(item => <WhyUsCard key={item.id} item={item}></WhyUsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyUs;