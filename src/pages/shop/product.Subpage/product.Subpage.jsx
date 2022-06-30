import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const ProductSubpage = () => {
    const urlParams = useParams();

    // Effects
    useEffect(() => {
        fetchProduct();
    }, [])

    // States
    const [product, setProduct] = useState(null);
    // Functions
    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }



    return (
        <div className="container">
            <div className="products__wrapper text-center">
                <h1 className="my-3">Shop</h1>

                {
                    product!= null? (

                        <div className="products">
                            {


                                <div className="products__item d-flex flex-column align-items-center">
                                    <img className='w-25' src={product.image} alt="img" />
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <p>Price : {product.price}</p>

                                </div>



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

export default ProductSubpage