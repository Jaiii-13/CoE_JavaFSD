import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, dispatch } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-8 bg-white shadow-xl rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto">
            {cart.length === 0 ? (
                <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
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
                        </div>
                    ))}
                    <h3 className="text-xl font-bold mt-4">Total: ${totalPrice}</h3>
                    <Link to="/checkout">
                        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition w-full mt-4">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
