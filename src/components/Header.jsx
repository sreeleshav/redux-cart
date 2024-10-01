import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { search } from '../redux/slices/productSlice';


function Header() {

    const [key, setKey] = useState("")
    const dispatch = useDispatch()

    const searchWitheKey = () => {
        dispatch(search(key))
    }

    const { wishlist } = useSelector((state) => state.wishReducer)

    const { cart } = useSelector((state) => state.cartReducer)

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-bag-shopping fa-xl" style={{ color: "#74C0FC", }} />
                        {''}
                        ReduxCart
                    </Navbar.Brand>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <input type="text" onChange={(e) => setKey(e.target.value)} placeholder='Search' className='form-control me-2'/>
                            <button onClick={searchWitheKey} className='btn btn-success me-2'>Search</button>
                        </div>
                    </div>

                    <div className=''>
                        <Link to={'/wish'} className='btn btn-outline-dark me-4'>
                            <i className="fa-solid fa-heart" style={{ color: "#e90707", }} />
                            {''}
                            Wishlist
                            <span className='badge bg-dark ms-2'>
                                {wishlist?.length}
                            </span>
                        </Link>
                        <Link to={'/cart'} className='btn btn-outline-dark'>
                            <i className="fa-solid fa-cart-shopping" style={{ color: "#63E6BE", }} />
                            {''}
                            Cart
                            <span className='badge bg-dark ms2'>
                                {cart?.length}
                            </span>
                        </Link>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default Header