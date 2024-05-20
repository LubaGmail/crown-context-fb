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

    const addItemToCart = (product) => {
        let item = getExisingItem(product.id, cartItems);
        let updated = []
                  
        if (item) {
            updated = cartItems.map((el) => {
                return el.id === item.id    ? 
                    { ...el, qty: ++el.qty } :
                    el
            })
        } else {
            updated = [...cartItems, { ...product, qty: 1 }];
        }
        setCartItems(updated)
        
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
    }
 
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}