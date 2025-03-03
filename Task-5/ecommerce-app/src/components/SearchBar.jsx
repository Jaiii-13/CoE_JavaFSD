const SearchBar = ({ setSearchQuery }) => {
    return (
        <div className="w-full flex justify-center mt-20">
            <input
                type="text"
                placeholder="🔍 Search for products..."
                className="w-full max-w-lg p-4 text-lg border-2 border-blue-500 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white placeholder-gray-600"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
