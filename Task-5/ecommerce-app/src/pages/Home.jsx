import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";


const products = [
    { id: 1, name: "Smartphone", price: 600, category: "electronics" },
    { id: 2, name: "Laptop", price: 1200, category: "electronics" },
    { id: 3, name: "T-Shirt", price: 30, category: "fashion" },
    { id: 4, name: "Jeans", price: 50, category: "fashion" },
    { id: 5, name: "Water Bottle", price: 50, category: "daily supplies" },
    { id: 6, name: "Smart Watch", price: 250, category: "electronics" },
    { id: 7, name: "Headphones", price: 100, category: "electronics" },
    { id: 8, name: "Bluetooth Speaker", price: 80, category: "electronics" },
    { id: 9, name: "Sneakers", price: 90, category: "fashion" },
    { id: 10, name: "Leather Jacket", price: 200, category: "fashion" },
    { id: 11, name: "Coffee Maker", price: 120, category: "home appliances" },
    { id: 12, name: "Electric Kettle", price: 40, category: "home appliances" },
    { id: 13, name: "Microwave Oven", price: 300, category: "home appliances" },
    { id: 14, name: "Gaming Mouse", price: 70, category: "electronics" },
    { id: 15, name: "Mechanical Keyboard", price: 150, category: "electronics" },
    { id: 16, name: "Backpack", price: 60, category: "fashion" },
    { id: 17, name: "Sunglasses", price: 50, category: "fashion" },
    { id: 18, name: "Perfume", price: 100, category: "beauty" },
    { id: 19, name: "Handbag", price: 150, category: "fashion" },
    { id: 20, name: "Yoga Mat", price: 40, category: "fitness" },
    { id: 21, name: "Dumbbells", price: 80, category: "fitness" },
    { id: 22, name: "Treadmill", price: 600, category: "fitness" },
    { id: 23, name: "Drone", price: 800, category: "electronics" },
    { id: 24, name: "Camera", price: 500, category: "electronics" },
    { id: 25, name: "Smart Bulb", price: 30, category: "home appliances" },
    { id: 26, name: "Air Purifier", price: 250, category: "home appliances" },
    { id: 27, name: "Wireless Charger", price: 40, category: "electronics" },
    { id: 28, name: "Gaming Chair", price: 300, category: "furniture" },
    { id: 29, name: "Office Desk", price: 250, category: "furniture" },
    { id: 30, name: "Smart Door Lock", price: 200, category: "home security" },
    { id: 31, name: "Bedside Lamp", price: 50, category: "home decor" },
    { id: 32, name: "Bookshelf", price: 180, category: "furniture" },
    { id: 33, name: "Wristwatch", price: 300, category: "fashion" },
    { id: 34, name: "Bluetooth Earbuds", price: 120, category: "electronics" },
    { id: 35, name: "Skateboard", price: 90, category: "sports" },
    { id: 36, name: "Cycling Helmet", price: 80, category: "sports" },
    { id: 37, name: "Tent", price: 250, category: "outdoor" },
    { id: 38, name: "Portable Grill", price: 180, category: "outdoor" },
    { id: 39, name: "Sofa Set", price: 1000, category: "furniture" },
    { id: 40, name: "Portable Fan", price: 45, category: "home appliances" },
    { id: 41, name: "Robot Vacuum", price: 350, category: "home appliances" },
    { id: 42, name: "Frying Pan", price: 40, category: "kitchen" },
    { id: 43, name: "Blender", price: 100, category: "kitchen" },
    { id: 44, name: "Running Shoes", price: 120, category: "fitness" },
    { id: 45, name: "Electric Scooter", price: 500, category: "transport" },
    { id: 46, name: "Hoverboard", price: 400, category: "transport" },
    { id: 47, name: "Rug", price: 150, category: "home decor" },
    { id: 48, name: "Smart Thermostat", price: 200, category: "home appliances" },
    { id: 49, name: "Pet Bed", price: 70, category: "pets" },
    { id: 50, name: "Cat Tree", price: 120, category: "pets" },
    { id: 51, name: "Bicycle", price: 350, category: "sports" },
    { id: 52, name: "Gaming Console", price: 500, category: "electronics" },
    { id: 53, name: "Desk Lamp", price: 40, category: "home decor" },
    { id: 54, name: "Hair Dryer", price: 75, category: "beauty" },
    { id: 55, name: "Electric Toothbrush", price: 60, category: "personal care" },
    { id: 56, name: "Kitchen Knife Set", price: 80, category: "kitchen" },
    { id: 57, name: "Rice Cooker", price: 120, category: "kitchen" },
    { id: 58, name: "Shower Speaker", price: 50, category: "electronics" },
    { id: 59, name: "Camping Stove", price: 100, category: "outdoor" },
    { id: 60, name: "Electric Blanket", price: 90, category: "home appliances" },
    { id: 61, name: "Car Vacuum", price: 60, category: "automotive" },
    { id: 62, name: "Leather Wallet", price: 40, category: "fashion" },
    { id: 63, name: "Standing Fan", price: 70, category: "home appliances" },
    { id: 64, name: "Portable Power Bank", price: 40, category: "electronics" },
    { id: 65, name: "Indoor Plant", price: 30, category: "home decor" },
    { id: 66, name: "Yoga Block", price: 20, category: "fitness" },
    { id: 67, name: "Electric Grill", price: 150, category: "kitchen" },
    { id: 68, name: "Office Chair", price: 250, category: "furniture" },
    { id: 69, name: "Soundbar", price: 200, category: "electronics" },
    { id: 70, name: "Massage Gun", price: 180, category: "fitness" },
    { id: 71, name: "Toilet Paper", price: 10, category: "daily supplies" },
    { id: 72, name: "Dishwashing Liquid", price: 15, category: "daily supplies" },
    { id: 73, name: "Laundry Detergent", price: 25, category: "daily supplies" },
    { id: 74, name: "Hand Sanitizer", price: 8, category: "daily supplies" },
    { id: 75, name: "Trash Bags", price: 12, category: "daily supplies" },
    { id: 76, name: "Tissues", price: 5, category: "daily supplies" },
    { id: 77, name: "Paper Towels", price: 10, category: "daily supplies" },
    { id: 78, name: "Disinfectant Wipes", price: 18, category: "daily supplies" },
    { id: 79, name: "Cotton Swabs", price: 7, category: "daily supplies" },
    { id: 80, name: "Toothpaste", price: 10, category: "daily supplies" },
    { id: 81, name: "Shampoo", price: 20, category: "daily supplies" },
    { id: 82, name: "Conditioner", price: 20, category: "daily supplies" },
    { id: 83, name: "Bar Soap", price: 6, category: "daily supplies" },
    { id: 84, name: "Mouthwash", price: 12, category: "daily supplies" },
    { id: 85, name: "Deodorant", price: 14, category: "daily supplies" },
    { id: 86, name: "Disposable Razor", price: 10, category: "daily supplies" },
    { id: 87, name: "Sponge Scrubbers", price: 6, category: "daily supplies" },
    { id: 88, name: "Aluminum Foil", price: 8, category: "daily supplies" },
    { id: 89, name: "Plastic Wrap", price: 7, category: "daily supplies" },
    { id: 90, name: "Fabric Softener", price: 15, category: "daily supplies" },
    { id: 91, name: "Harry Potter and the Sorcerer's Stone", price: 20, category: "books" },
    { id: 92, name: "Harry Potter and the Chamber of Secrets", price: 22, category: "books" },
    { id: 93, name: "Harry Potter and the Prisoner of Azkaban", price: 24, category: "books" },
    { id: 94, name: "Harry Potter and the Goblet of Fire", price: 25, category: "books" },
    { id: 95, name: "Harry Potter and the Order of the Phoenix", price: 27, category: "books" },
    { id: 96, name: "Harry Potter and the Half-Blood Prince", price: 28, category: "books" },
    { id: 97, name: "Harry Potter and the Deathly Hallows", price: 30, category: "books" },
    { id: 98, name: "The Hobbit", price: 18, category: "books" },
    { id: 99, name: "The Lord of the Rings", price: 35, category: "books" },
    { id: 100, name: "The Great Gatsby", price: 15, category: "books" },
    { id: 101, name: "To Kill a Mockingbird", price: 18, category: "books" },
    { id: 102, name: "1984", price: 20, category: "books" },
    { id: 103, name: "Pride and Prejudice", price: 22, category: "books" },
    { id: 104, name: "The Catcher in the Rye", price: 19, category: "books" },
    { id: 105, name: "Moby-Dick", price: 25, category: "books" },
    { id: 106, name: "War and Peace", price: 30, category: "books" },
    { id: 107, name: "The Alchemist", price: 18, category: "books" },
    { id: 108, name: "The Da Vinci Code", price: 22, category: "books" },
    { id: 109, name: "The Chronicles of Narnia", price: 35, category: "books" },
    { id: 110, name: "A Game of Thrones", price: 25, category: "books" }


];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("all");

    const filteredProducts = products.filter((product) =>
        (category === "all" || product.category === category) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300 text-gray-900 p-6 pt-24">
            <SearchBar setSearchQuery={setSearchQuery} />
            <Filters setCategory={setCategory} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
