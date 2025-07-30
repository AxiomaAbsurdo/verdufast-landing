import React, { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = [
    { id: 'all', name: 'Todos', emoji: '🛒' },
    { id: 'fruits', name: 'Frutas', emoji: '🍎' },
    { id: 'vegetables', name: 'Verduras', emoji: '🥬' },
    { id: 'herbs', name: 'Hierbas', emoji: '🌿' },
  ];

  const products = [
    {
      id: 1,
      name: 'Manzanas Rojas',
      category: 'fruits',
      price: 120,
      unit: 'kg',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      stock: 15,
      discount: 10,
      description: 'Manzanas rojas crujientes y dulces, perfectas para toda la familia.'
    },
    {
      id: 2,
      name: 'Bananas',
      category: 'fruits',
      price: 80,
      unit: 'kg',
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      stock: 25,
      description: 'Bananas maduras, ideales para desayunos y meriendas saludables.'
    },
    {
      id: 3,
      name: 'Lechuga Criolla',
      category: 'vegetables',
      price: 60,
      unit: 'unidad',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      stock: 12,
      description: 'Lechuga fresca y crujiente, perfecta para ensaladas nutritivas.'
    },
    {
      id: 4,
      name: 'Tomates',
      category: 'vegetables',
      price: 100,
      unit: 'kg',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      stock: 20,
      discount: 15,
      description: 'Tomates maduros y jugosos, ideales para salsas y ensaladas.'
    },
    {
      id: 5,
      name: 'Naranjas',
      category: 'fruits',
      price: 90,
      unit: 'kg',
      image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      stock: 18,
      description: 'Naranjas dulces y jugosas, ricas en vitamina C.'
    },
    {
      id: 6,
      name: 'Zanahorias',
      category: 'vegetables',
      price: 70,
      unit: 'kg',
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      stock: 22,
      description: 'Zanahorias frescas y crujientes, perfectas para cocinar o comer crudas.'
    },
    {
      id: 7,
      name: 'Perejil',
      category: 'herbs',
      price: 40,
      unit: 'atado',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      stock: 8,
      description: 'Perejil fresco y aromático para dar sabor a tus comidas.'
    },
    {
      id: 8,
      name: 'Limones',
      category: 'fruits',
      price: 110,
      unit: 'kg',
      image: 'https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      stock: 16,
      description: 'Limones frescos y ácidos, perfectos para aderezos y bebidas.'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const updateCart = (productId: number, change: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      const currentAmount = newCart[productId] || 0;
      const newAmount = Math.max(0, currentAmount + change);
      
      if (newAmount === 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = newAmount;
      }
      
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const handleTelegramOrder = () => {
    const orderItems = Object.entries(cart).map(([productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return `${product?.name}: ${quantity} ${product?.unit}`;
    }).join('\n');
    
    const message = `¡Hola! Quiero hacer un pedido:\n\n${orderItems}\n\n¿Podrían confirmar disponibilidad y precio total?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/@verdufast_bot?start=${encodedMessage}`, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Productos Frescos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seleccionamos los mejores productos del mercado central cada mañana 
            para garantizar máxima frescura y calidad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.emoji}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}

                {/* Stock Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                  product.stock > 10 
                    ? 'bg-green-100 text-green-800' 
                    : product.stock > 5 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.stock > 10 ? 'En stock' : `Solo ${product.stock}`}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {product.discount ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-emerald-600">
                          ${Math.round(product.price * (1 - product.discount / 100))}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${product.price}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-emerald-600">
                        ${product.price}
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">/{product.unit}</span>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex items-center justify-between">
                  {cart[product.id] ? (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateCart(product.id, -1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-lg">{cart[product.id]}</span>
                      <button
                        onClick={() => updateCart(product.id, 1)}
                        className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => updateCart(product.id, 1)}
                      className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Agregar</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary & CTA */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto">
            <div className="bg-emerald-600 text-white rounded-2xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="font-bold text-lg">
                    {getTotalItems()} producto{getTotalItems() > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleTelegramOrder}
                className="w-full bg-white text-emerald-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                🤖 Continuar en Telegram
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No encontramos productos en esta categoría
            </h3>
            <p className="text-gray-600">
              Probá con otra categoría o contactanos para consultar disponibilidad.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;