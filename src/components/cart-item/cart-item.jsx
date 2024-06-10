import {memo} from 'react'

import './cart-item.styles.scss'

/**
   React. memo() focuses on memoizing functional components to prevent unnecessary re-renders based on props, 
   useMemo() hoookis used to memoize expensive computations within functional components.
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