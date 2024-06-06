import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }
   
    return (
        <>
            <div className='cart-dropdown-container'>
                {
                    cartItems.length < 1 ? (
                        <p style={{ textAlign: "center"}}>Your cart is empty.</p>
                    ) : (
                        <>
                            <div className='cart-items'>   
                                {
                                    cartItems.map(el => (
                                        <CartItem key={el.id} cartItem={el} />
                                    ))
                                }
                            </div>    
                            <button onClick={goToCheckout}>GO TO CHECKOUT</button>    
                        </>
                    )
                }
                                
            </div>
        
        </>
    )

}

export default CartDropdown