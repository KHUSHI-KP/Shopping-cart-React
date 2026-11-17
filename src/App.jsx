
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import headphones from "./assets/headphones.png";
import smartwatch from "./assets/smartwatch.png";
import earbuds from "./assets/earbuds.png";
import speaker from "./assets/speaker.png";
import WishlistPage from "./components/WishlistPage";

function App() {

    const [page, setPage] = useState("products");

    const products = [
    {
        id: 1,
        name: "Headphones",
        price: 1499,
        stock: 5,
        image: headphones
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        stock: 3,
        image: smartwatch
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        price: 999,
        stock: 0,
        image: earbuds
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: 1999,
        stock: 4,
        image: speaker
    }
];

    return (
        <div>
   <Navbar setPage={setPage} />

{page === "products" ? (
    <ProductList products={products} />
) : page === "cart" ? (
    <CartPage />
) : (
    <WishlistPage />
)}

        </div>
    );
}

export default App;
