import {memo} from 'react'

import './cart-item.styles.scss'

/**
    Do not rerender unless the actual value changes
 */

const CartItem = memo( ({ cartItem }) => {
    const { id, name, imageUrl, price, qty } = cartItem

    return (
        <>
            <div className='cart-item-container'>
                <img src={imageUrl} alt={name} />
                <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span className='price'>{qty} x ${price}</span>
                </div>
            </div>
        </>
    )
} )
export default CartItem