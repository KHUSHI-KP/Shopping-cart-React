
import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const [stock, setStock] = useState({
        1: 5,
        2: 3,
        3: 0,
        4: 4
    });

    const addToCart = (product) => {

        if (stock[product.id] <= 0) {
            alert("Product is out of stock!");
            return;
        }

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );

        } else {

            setCart((prevCart) => [
                ...prevCart,
                { ...product, quantity: 1 }
            ]);
        }
        setStock((prevStock) => ({
            ...prevStock,
            [product.id]: prevStock[product.id] - 1
        }));
    };

    const updateQuantity = (id, change) => {

        const item = cart.find(
            (product) => product.id === id
        );

        if (!item) return;

        if (change === 1 && stock[id] <= 0) {
            alert("No more stock available!");
            return;
        }

        if (change === -1 && item.quantity <= 1) {
            return;
        }

        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantity: product.quantity + change
                    }
                    : product
            )
        );

        // Update available stock
        setStock((prevStock) => ({
            ...prevStock,
            [id]: prevStock[id] - change
        }));
    };

    // Remove product from cart
    const removeFromCart = (id) => {

        const item = cart.find(
            (product) => product.id === id
        );

        if (!item) return;

        // Restore stock
        setStock((prevStock) => ({
            ...prevStock,
            [id]: prevStock[id] + item.quantity
        }));

        setCart((prevCart) =>
            prevCart.filter((product) => product.id !== id)
        );
    };

    // Wishlist
    const toggleWishlist = (product) => {

        const exists = wishlist.find(
            (item) => item.id === product.id
        );

        if (exists) {

            setWishlist((prev) =>
                prev.filter((item) => item.id !== product.id)
            );

        } else {

            setWishlist((prev) => [...prev, product]);
        }
    };

    // Calculate total
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                wishlist,
                stock,
                addToCart,
                updateQuantity,
                removeFromCart,
                toggleWishlist,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
