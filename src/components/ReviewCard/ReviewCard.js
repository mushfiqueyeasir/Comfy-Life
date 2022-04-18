import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { id, name, img, rating, occupation, message } = review;
    console.log = console.warn = console.error = () => { };

    return (
        <div className="col">
            <div className="card h-100 p-2">
                <div className='ps-3 pt-3 pb-0 quotes'>
                    <i className="fa-solid fa-quote-left fs-1"></i>
                </div>

                <div className="card-body">
                    <p className="card-text ps-2 pt-0">{message}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: '#FE8A5F' }} icon={faStar} />}
                        readonly
                    ></Rating>
                    <div className='d-flex align-items-center mt-3'>
                        <div className='w-25'>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>
                        <div className='ps-2'>
                            <h5 className='name'>{name}</h5>
                            <h5 className='occupation'>{occupation}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;