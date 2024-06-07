import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems,  setIsCartOpen } = useContext(CartContext)
    const navigate = useNavigate()

    // useCallback memoize a function, not a return value of the function
    //
    const goToCheckout = useCallback(() => {
        setIsCartOpen(false);
        navigate('/checkout')
    }, [navigate, setIsCartOpen])          // navigate is not expected to change, so this [dependency] just follows syntax 
   
    return (
        <>
            <div className='cart-dropdown-container'>
                {
                    cartItems.length < 1? (
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

                               
                            {/* <Button doSomething={() => navigate('/checkout')}>GO TO CHECKOUT</Button>    */}
                                
                            <Button doSomething={goToCheckout} buttonType='checkout'>GO TO CHECKOUT</Button>   
                            
                            {/* <Button doSomething={() => alert('abc')} buttonType='red'>Alert Demo</Button>  */}
                                
                        </>
                    )
                }
                                
            </div>
        
        </>
    )

}

export default CartDropdown