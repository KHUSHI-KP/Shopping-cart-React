
import ProductCard from "./ProductCard";

function ProductList({ products }) {

    return (
        <div className="product-container">

            <h2>Our Products</h2>

            <div className="product-grid">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
}

export default ProductList;