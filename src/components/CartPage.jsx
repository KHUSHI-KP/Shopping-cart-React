
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {

    const {
        cart,
        stock,
        updateQuantity,
        removeFromCart,
        total
    } = useContext(CartContext);

return (
<div className="cart-container">

<h2>My Shopping Cart</h2>

{cart.length === 0 ? (<h3>Your cart is empty!</h3>) : 
(
<>
    {cart.map((item) => (
        <div className="cart-item" key={item.id}>
            <img
                src={item.image}
                alt={item.name}
            />
            <div>
                <h3>{item.name}</h3>

                <p>Price: ₹{item.price}</p>

                <p>
                    Stock Available: {stock[item.id]}
                </p>

                <p>
                    {stock[item.id] > 0
                        ? "Available"
                        : "Not Available"}
                </p>

                <button
                    onClick={() =>
                        updateQuantity(item.id, -1)
                    }
                    disabled={item.quantity === 1}
                >
                    -
                </button>

                <span> {item.quantity} </span>

                <button
                    onClick={() =>
                        updateQuantity(item.id, 1)
                    }
                    disabled={stock[item.id] === 0}
                >
                    +
                </button>

                <p>
                    Subtotal: ₹
                    {item.price * item.quantity}
                </p>

                <button
                    onClick={() =>
                        removeFromCart(item.id)
                    }
                >
                    Remove
                </button>

            </div>

        </div>

    ))}

    <h2>Total: ₹{total}</h2>

</>
)}

</div>
);
}

export default CartPage;
