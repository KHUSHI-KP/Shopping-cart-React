
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

    const {
        addToCart,
        wishlist,
        toggleWishlist,
        stock
    } = useContext(CartContext);

    const isWishlisted = wishlist.some(
        (item) => item.id === product.id
    );

    return (
        <div className="product-card">

            <img src={product.image} alt={product.name} />

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
                {isWishlisted
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
            </button>

        </div>
    );
}

export default ProductCard;
