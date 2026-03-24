import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : []; /// preciso entender como funciona
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]) // preciso entender o por que de usar useEffectr



    // 2. Envolva a função com useCallback
    const addToCart = useCallback((product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);

            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    }, []); // 3. Array vazio! A função nasce uma vez e nunca mais muda de "endereço".

    const removeFromCart = useCallback((id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    }, []); // 4. Também estável, não depende de variáveis externas, só do 'setCart'


    const updateQuantity = useCallback((id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id); // Aqui tem um detalhe importante!
            return;
        }
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    }, [removeFromCart]); // Adicionamos 'removeFromCart' como dependência
    const clearCart = useCallback(() => {
        setCart([]);
    }, []); // Array vazio porque o setCart nunca muda


    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);

    const totalItems = cart.reduce((acc, item) => { // preciso entender como o reduce funciona
        return acc + item.quantity;
    }, 0);


    const value = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        clearCart,
        totalItems
    }), [cart, addToCart, removeFromCart, updateQuantity, total, clearCart, totalItems]);

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



