import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {fetchProducts} from '../../redux/features/shopSlice'

const ShopPage = () => {

    const dispatch = useDispatch();

    // Effects
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    // Selectors
    const products = useSelector(state => state.shop.products);
    const loading = useSelector(state => state.shop.loading);

    // UI
    return (
        <div className="container">
            <div className="products__wrapper text-center">
                <h1 className="my-3">Shop</h1>

                {
                   !loading ? (

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