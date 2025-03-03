import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cart, dispatch } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="border p-4 my-2 flex justify-between items-center">
                            <p className="text-lg">{item.name} - ${item.price}</p>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
                                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 transition"
                                >
                                    ➖
                                </button>
                                <span className="text-lg">{item.quantity}</span>
                                <button
                                    onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
                                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 transition"
                                >
                                    ➕
                                </button>
                            </div>
                            <button
                                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3 className="text-xl font-bold mt-4">Total: ${totalPrice}</h3>
                </div>
            )}
        </div>
    );
};

export default CartPage;
