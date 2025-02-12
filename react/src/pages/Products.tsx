import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import groundnutOil from "../assets/Groundnut.png"; 
import mustardOil from "../assets/Mustard.png";
import sesameOil from "../assets/Sesame.png";
import coconutOil from "../assets/Coconut.png";

const products = [
  {
    id: 1,
    name: "Cold Pressed Groundnut Oil",
    description: "Pure and natural groundnut oil extracted through traditional cold-pressing method",
    price: 12.99,
    image: groundnutOil,
    size: "1 Liter"
  },
  {
    id: 2,
    name: "Premium Mustard Oil",
    description: "Traditional cold-pressed mustard oil with authentic flavor and aroma",
    price: 14.99,
    image: mustardOil,
    size: "1 Liter"
  },
  {
    id: 3,
    name: "Organic Sesame Oil",
    description: "Pure sesame oil extracted from organically grown sesame seeds",
    price: 16.99,
    image: sesameOil,
    size: "1 Liter"
  },
  {
    id: 4,
    name: "Cold Pressed Coconut Oil",
    description: "Virgin coconut oil extracted through traditional methods",
    price: 18.99,
    image: coconutOil,
    size: "1 Liter"
  }
];

const Products = () => {
  const { addItem } = useCart();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border rounded-lg">
              <option>All Categories</option>
              <option>Groundnut Oil</option>
              <option>Mustard Oil</option>
              <option>Sesame Oil</option>
              <option>Coconut Oil</option>
            </select>
            <select className="px-4 py-2 border rounded-lg">
              <option>Sort by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 font-bold text-xl">${product.price}</p>
                    <p className="text-sm text-gray-500">{product.size}</p>
                  </div>
                  <button
                    onClick={() => addItem(product)}
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;