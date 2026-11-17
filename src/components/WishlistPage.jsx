
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function WishlistPage() {

const {
wishlist,
toggleWishlist,
addToCart,
stock
} = useContext(CartContext);

return (
<div className="product-container">

<h2>My Wishlist </h2>

{wishlist.length === 0 ? (<h3>Your Wishlist is Empty!</h3>) : 
(<div className="product-grid">
{wishlist.map((product) => 
(
<div className="product-card" key={product.id}>

    <img
        src={product.image}
        alt={product.name}
    />

    <h3>{product.name}</h3>

    <p>Price: ₹{product.price}</p>

    <p>
        Available Quantity: {stock[product.id]}
    </p>

    <p>
        {stock[product.id] > 0
            ? "Available"
            : "Not Available"}
    </p>

    <button
        disabled={stock[product.id] === 0}
        onClick={() => addToCart(product)}
    >
        Add to Cart
    </button>

    <button
        onClick={() => toggleWishlist(product)}
    >
        Remove from Wishlist
    </button>
</div>
))}
</div>
)}
</div>
);
}
export default WishlistPage;
