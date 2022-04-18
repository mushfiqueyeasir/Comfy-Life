import React from 'react';
import './Reviews.css';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    let length = reviews.length;

    let titleHeading;
    let seeMore;

    const path = window.location.href;
    const lastPath = path.substring(path.lastIndexOf('/') + 1);
    if (lastPath === 'home' || !lastPath) {
        titleHeading = <h1 className=''>What's Our Customer Says</h1>;
        length = 3
        seeMore = <div className='d-flex justify-content-end seeAll pe-2 pe-lg-5 mb-2'>
            <Link to="/reviews" className='seeAll'>See All <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    }
    return (
        <article className='bg py-5  py-lg-5'>
            <div className='container my-0  bg'>
                {titleHeading}
                {seeMore}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.slice(0, length).map(review => <ReviewCard key={review.id} review={review} />)
                    }
                </div>
            </div >

        </article >

    );
};

export default Reviews;