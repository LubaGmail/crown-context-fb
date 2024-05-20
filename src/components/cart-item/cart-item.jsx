import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
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
}
export default CartItem