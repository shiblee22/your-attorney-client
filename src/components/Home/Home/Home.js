import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css';

const Home = () => {
    // #687693 #c9b38c
    return (
        <div>
            <div id="header-top">
                <div className="container text-white">
                    <Navbar></Navbar>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-1 mt-5">

                            <h1 >YOUR ATTORNEY</h1>
                            <h3 >BEST LAW FIRM SINCE 1996</h3>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus iusto nemo numquam dignissimos provident.</small>
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
            <WhyUs></WhyUs>
            <Testimonial></Testimonial>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;