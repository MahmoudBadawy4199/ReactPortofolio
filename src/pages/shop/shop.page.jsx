import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopPage = () => {


    // Effects
    useEffect(() => {
        fetchData();
    }, [])


    // States
    const [products, setProducts] = useState([]);

    // Functions
    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }






    // UI
    return (
        <div className="container">
            <div className="products__wrapper text-center">
                <h1 className="my-3">Shop</h1>

                {
                    products.length > 0 ? (

                        <div className="products">
                            {
                                products.map((item, i) => {
                                    return (
                                        <Link to={`/product/${item.id}`} key={i} className="products__item d-flex align-items-center">
                                            <img className='w-25' src={item.image} alt="img" />
                                            <h3>{item.title}</h3>
                                        </Link>
                                    )
                                }
                                )
                            }

                        </div>
                    ) : (

                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>

                    )
                }

            </div>

        </div>

    )
}

export default ShopPage