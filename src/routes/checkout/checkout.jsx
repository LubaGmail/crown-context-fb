import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../../components/checkout-item/checkout-item"
import Button from "../../components/button/button"
    
import './checkout-styles.scss'

const Checkout = () => {
    const { cartItems, cartCostTotal, clearCart } = useContext(CartContext)

    return (
        <>
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-desc">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                 </div>

                {
                    cartItems.map(el => (
                       <CheckoutItem key={el.id} checkoutItem={el} />
                    ))
                }
                <div className="total">
                    Total cost: ${cartCostTotal}
                </div>

                <div className="total">
                    <Button doSomething={clearCart} buttonType='red'>Clear Cart</Button>
                </div>
            </div>
        </>
    )
}

export default Checkout