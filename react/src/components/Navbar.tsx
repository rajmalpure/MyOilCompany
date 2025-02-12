import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { state, toggleCart } = useCart();

    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={logo} alt="HealthCare Logo" className="h-16 w-auto" /> {/* Increase size */}
                            <span className="text-lg font-bold text-gray-800">Coldpress Oil</span> {/* Reduce size */}
                        </Link>


                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
                        <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
                        <Link to="/products" className="text-gray-600 hover:text-green-600">Products</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
                        <button
                            onClick={toggleCart}
                            className="relative text-gray-600 hover:text-green-600"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleCart}
                            className="relative text-gray-600 hover:text-green-600"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-green-600"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/products"
                                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;