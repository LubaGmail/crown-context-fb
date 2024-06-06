import { createContext, useState } from "react"; 

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,

    cartItems: [],
    setCartItems: (product) => null,
   
    addCheckoutQty: () => null,
    subtractCheckoutQty: () => null,
    removeCheckoutItem: () => null,

    cartQtyTotal: 0,
    cartCostTotal: 0,
    clearCart: () => null
})

const getExisingItem = (id, cartItems) => {
    let existingItem = cartItems.find(el => {
        return el.id === id
    })
    return existingItem
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartQtyTotal, setCartQtyTotal] = useState(0)
    const [cartCostTotal, setCartCostTotal] = useState(0)

    const updateCartTotals = (amount, qty) => {
        let qtyTotal = cartQtyTotal
        setCartQtyTotal(qtyTotal + qty)
        let costTotal = cartCostTotal
        setCartCostTotal(costTotal + amount)
    }
  
    /**
        product:   {featured: false, price: 25, name: 'Brown Brim', id: 1, imageUrl: 'https://i...png' }
        item:      {featured: false, price: 25, name: 'Brown Brim', id: 1, imageUrl: 'https://i...png',  qty:2 }
     */
    const addItemToCart = (product) => {
        let item = getExisingItem(product.id, cartItems);
        let updatedCart= []
                  
        if (item) {
            updatedCart= cartItems.map((el) => {
                return el.id === item.id    ? 
                    { ...el, qty: ++el.qty } :
                    el
            })
        } else {
            updatedCart= [...cartItems, { ...product, qty: 1 }];
        }
        setCartItems(updatedCart)
        
        updateCartTotals(product.price, 1)
     }

    const addCheckoutQty = (checkoutItem) => {
        let items = cartItems.map(el => {
            if (checkoutItem.id === el.id) {
                el.qty++
            }
            return el
        })
        setCartItems(items)

        updateCartTotals(checkoutItem.price, 1) 
    }

    const subtractCheckoutQty = (checkoutItem) => {
        let items = cartItems.map(el => {
            if (checkoutItem.id === el.id) {
                el.qty--
            }
            return el
        })
        setCartItems(items)
       
        updateCartTotals(checkoutItem.price *(-1), -1) 
    }

    const removeCheckoutItem = (checkoutItem) => {
        let items = cartItems.filter(el => {
            return el.id !== checkoutItem.id
        })
        setCartItems(items)
    
        let qtyTotal = cartQtyTotal
        setCartQtyTotal(qtyTotal - checkoutItem.qty)
        let costTotal = cartCostTotal
        setCartCostTotal(costTotal - checkoutItem.price * checkoutItem.qty)
    }

    const clearCart = () => {
        setIsCartOpen(false)
        setCartItems([])
        setCartQtyTotal(0)
        setCartQtyTotal(0)
    }

    const value = {
        isCartOpen,
        setIsCartOpen,

        cartItems,
        addItemToCart,
  
        addCheckoutQty,
        subtractCheckoutQty,
        removeCheckoutItem,

        cartQtyTotal,
        cartCostTotal,
        clearCart
    }
 
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}