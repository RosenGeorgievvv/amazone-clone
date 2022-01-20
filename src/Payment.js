import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {

    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")

    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                        <div className='payment_items'>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
