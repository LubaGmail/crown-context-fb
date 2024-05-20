import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import './checkout-item.styles.scss'

const CheckoutItem = ({ checkoutItem }) => {
    const { id, imageUrl, name, qty, price } = checkoutItem
    const {addCheckoutQty, subtractCheckoutQty, removeCheckoutItem} = useContext(CartContext)

    const subtractQty = () => {
        if (checkoutItem.qty < 2) return
        subtractCheckoutQty(checkoutItem)
    }
    const addQty = () => {
        addCheckoutQty(checkoutItem)
    }

    const removeItem = () => {
        removeCheckoutItem(checkoutItem)
    }
    
    return (
        <>
            <div className="checkout-item-container">
                <div className="image-container">
                    <img src={imageUrl}  alt={name} />
                </div>
                <span className="name">
                    {name}
                </span>

                <span className="quantity">
                    <span onClick={subtractQty} className="arrow ">  &lt; </span> 
                    <span className="value ">{qty}</span>
                    <span onClick={addQty} className="arrow "> &gt; </span>
                </span>
                
                <span className='price'> {price}</span>
                
                <div className="remove-button ">
                    <span onClick={removeItem}>x</span>
                </div>
            </div>
        </>
    )
}

export default CheckoutItem