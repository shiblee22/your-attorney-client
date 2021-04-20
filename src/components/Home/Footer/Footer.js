import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="pt-5 text-white" style={{ backgroundColor: "#9A6E51" }}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-3 pe-5">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex voluptas suscipit officiis nostrum error praesentium iusto nihil doloremque eos.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5>Our Address</h5>
                        <p>45/15, New Eskaton Road, Dhaka</p>
                        <p>Phone: +123456789</p>
                        <p>Email: yourattorney@example.com</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 ps-lg-5">
                        <h5>Useful Links</h5>
                        <Link to="/" className="text-white">About Us</Link> <br/>
                        <Link to="/" className="text-white">Contact Us</Link> <br/>
                        <Link to="/" className="text-white">Privacy Policy</Link> <br/>
                        <Link to="/" className="text-white">FAQ</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5>Practice Area</h5>
                        <p>Real Eastate Law</p>
                        <p>Education Law</p>
                        <p>Family Law</p>
                        <p>Incurance Defence</p>
                    </div>
                </div>
                <div className="text-center py-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;