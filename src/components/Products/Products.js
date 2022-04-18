import './Products.css';
import useChairs from "../../hooks/useChairs";
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const Products = () => {
    const [chairs, setChairs] = useChairs();
    let length = chairs.length;
    let titleHeading;
    let seeMore;

    const path = window.location.href;
    const lastPath = path.substring(path.lastIndexOf('/') + 1);

    if (lastPath === 'home' || !lastPath) {
        titleHeading = <h1 className=''>Our Products</h1>;
        length = 3;
        seeMore = <div className='d-flex justify-content-end pe-2 pe-lg-5 mb-2'>
            <Link to="/products" className='seeAll'>See All <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    }
    return (
        <div className='container my-4 my-lg-5'>
            {titleHeading}
            {seeMore}

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    chairs.slice(0, length).map(chair => <ProductCard key={chair.id} products={chair} />)
                }
            </div>

        </div>
    );
};

export default Products;