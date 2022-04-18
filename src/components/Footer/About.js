import React from 'react';
import logo from '../../resource/logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='container py-4'>
                <div className="row">

                    <div className="col-12 col-lg-4 pt-3 order-1 px-4 px-lg-0">
                        <img src={logo} className="img-fluid w-50" alt="" />
                        <p className='text-white  my-5'> We Design our furnitures following minimalist philosophies. </p>
                        <div className='d-flex gap-3 fs-5 justify-content-center justify-content-lg-start'>
                            <a target="__blank" href="https://www.facebook.com/mushfique.yeasir.ifat/"><i className="fa-brands fa-facebook-f text-primary"></i></a>
                            <a target="__blank" href="https://twitter.com/?lang=en"><i className="fa-brands fa-twitter text-info"></i></a>
                            <a target="__blank" href="https://www.linkedin.com/in/mushfique-yeasir/"><i className="fa-brands fa-linkedin-in text-info"></i></a>
                            <a target="__blank" href="https://www.instagram.com/__ifat__/"><i className="fa-brands fa-instagram text-danger"></i></a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-2 pt-4 px-5 px-lg-5 order-2 ">
                        <h4 className='text-white my-4 my-lg-5 text-center text-lg-start'>ABOUT</h4>
                        <div className="d-flex flex-column text-white my-0 my-lg-5 gap-2 gap-lg-4 px-4 px-lg-0">
                            <h5 className='fs-6 fw-normal'>Shop</h5>
                            <h5 className='fs-6 fw-normal'>Delivery</h5>
                            <h5 className='fs-6 fw-normal'>Returns</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2 pt-4 px-5 px-lg-0  order-3">
                        <h4 className='text-white mb-4 my-lg-5 text-center text-lg-start'>HELP</h4>
                        <div className="d-flex flex-column text-white my-0 my-lg-5 gap-2 gap-lg-4 px-4 px-lg-0">
                            <h5 className='fs-6 fw-normal'>Order tracking</h5>
                            <h5 className='fs-6 fw-normal'>FAQ</h5>
                            <h5 className='fs-6 fw-normal'>Contact Us</h5>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 pt-4 order-4">
                        <h4 className='text-white my-5 text-center text-lg-start'>NEWSLETTER</h4>
                        <div className="d-flex flex-column text-white my-5 gap-4 ">
                            <h5 className='fs-6 fw-normal'>Join our mailing list for the latest product updates!</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr className='text-white' />

            <div className='container p-3'>
                <h5 className='text-white text-center fs-6 fw-normal'>© 2022 <a target="__blank" href="https://github.com/mushfiqueyeasir" className='owner'>Mushfique Yeasir</a>. All Right Reserved </h5>
            </div>



        </footer>
    );
};

export default Footer;
