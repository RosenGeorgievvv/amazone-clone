import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"


function Product({ id, title, image, price, rating }) {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch  the item into the Data Layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }

    return (
        <div className='product' key={'product'}>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
