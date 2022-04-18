import React from 'react';
import './Home.css';
import chair from '../../resource/demoChair.png'
import { Link } from 'react-router-dom';

const Home = () => {
    console.disableYellowBox = true;
    return (
        <main className='main-contaienr py-5'>
            <div className='container'>
                <div className="home-contaienr row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
                        <h1>Make Your Comfort Zone</h1>
                        <h2>With Best Chair</h2>
                        <p className='my-4'>We travel teh world to find traditional and modern furniture to bring a sophisticated, eclectic look to  your living room.</p>
                        <Link className='btn linkBtn p-2 w-22' to="/products">See Products</Link >
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
                        <img src={chair} alt="" />
                    </div>
                </div>
            </div>

        </main>

    );
};

export default Home;