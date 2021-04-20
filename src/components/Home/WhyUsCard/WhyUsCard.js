import React from 'react';

const WhyUsCard = ({item}) => {
    const {tittle, description, imgUrl} = item;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
            <div className="text-center text-white rounded-3" style={{border: "1px solid white"}}>
                <div className="p-3">
                    <img className="img-fluid" style={{height:"3rem"}} src={imgUrl} alt=""/>
                    <h5 className="mt-3">{tittle}</h5>
                    <p className="">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUsCard;