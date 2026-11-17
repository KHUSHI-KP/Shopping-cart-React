
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar({ setPage }) {

    const { cart, wishlist } = useContext(CartContext);

    const cartCount = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <>
<nav>
            <h2>My Shopping Store</h2>

            <div>

                <button onClick={() => setPage("products")}>
                    Products
                </button>

                <button onClick={() => setPage("cart")}>
                    Cart ({cartCount})
                </button>

                <button onClick={() => setPage("wishlist")}>
                    Wishlist  ({wishlist.length})
                </button>

            </div>
</nav>
        </>
    );
}

export default Navbar;
