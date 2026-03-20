import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(()=>{
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored): []; /// preciso entender como funciona
    });

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]) // preciso entender o por que de usar useEffectr

    function addToCart(product) { // tenho que entender como essa logica funciona
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);


            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }] // e para que isso server
        });
    }


    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter(item => item.id !== id))
    }


    function updateQuantity(id, newQuantity) {
        if (newQuantity <= 0) {
            removeFromCart(id)
            return;
        }
        setCart((prevCart) =>
            prevCart.map(item => item.id === id ? { ...item, quantity: newQuantity }
                : item

            )
        );
    }
    function clearCart() {
        setCart([])
    }


    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);

    const totalItems = cart.reduce((acc, item) => { // preciso entender como o reduce funciona
        return acc + item.quantity;
    }, 0);


    const value = useMemo(() => ({ // para o useMemo server
        cart, addToCart, removeFromCart, updateQuantity, total, clearCart, totalItems
    }), [cart])

    return (
        <CartContext.Provider value={value} >{children} </CartContext.Provider>
    )

}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart deve ser usado dentro de CartProvider')
    }

    return context


}



