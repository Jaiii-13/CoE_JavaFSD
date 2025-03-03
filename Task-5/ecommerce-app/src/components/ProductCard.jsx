import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();

    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
