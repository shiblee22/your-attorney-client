import React from 'react';

const TeamCard = ({ member }) => {
    const { name, expertise, imgUrl } = member;
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card my-3">
                <img src={imgUrl} className="img-fluid" style={{ height: "15rem" }} alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title color-background">{name}</h5>
                    <p className="card-text color-brand">{expertise}</p>

                </div>
            </div>
        </div>
    );
};

export default TeamCard;