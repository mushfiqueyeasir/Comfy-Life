import React from 'react';
import './ProductCard.css';

const ProductCard = ({ products, }) => {
    const { name, price, picture } = products;

    return (
        <div className="col">
            <div className="card h-100 radious">
                <img src={picture} className="card-img-top p-1" alt="..." style={{ height: "400px" }} />
                <div className="card-body body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> <strong>Price: </strong>{price}</p>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;