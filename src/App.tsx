import React, { useState, useEffect } from 'react'
import './App.css'

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutForm {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: 'credit' | 'debit' | 'paypal';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showCheckoutForm, setShowCheckoutForm] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState<CheckoutForm>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  useEffect(() => {
    // Mock product data
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Apple iPhone 13 Pro Max',
        price: 1099.99,
        originalPrice: 1299.99,
        image: 'https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_SL1500_.jpg',
        description: '6.7-inch Super Retina XDR display with ProMotion. Cinematic mode in 1080p at 30 fps. Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras.',
        rating: 4.8,
        reviews: 1250,
        inStock: true
      },
      {
        id: 2,
        name: 'Samsung 65-Inch Class QLED 4K UHD Q70A Series',
        price: 1297.99,
        originalPrice: 1499.99,
        image: 'https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg',
        description: 'QUANTUM PROCESSOR 4K: Elevate your picture to 4K with machine based AI. MOTION XCELERATOR TURBO+: Exceptional motion enhancement up to 4K 120Hz.',
        rating: 4.6,
        reviews: 890,
        inStock: true
      },
      {
        id: 3,
        name: 'Sony WH-1000XM4 Wireless Noise Canceling Overhead Headphones',
        price: 348.00,
        originalPrice: 399.99,
        image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg',
        description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.',
        rating: 4.7,
        reviews: 2100,
        inStock: true
      }
    ];
    setProducts(mockProducts);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Checkout form submitted:', checkoutForm);
    // Clear cart and show success message
    setCart([]);
    setShowCheckoutForm(false);
    setIsCartOpen(false);
  };

  return (
    <div className="app">
      <header>
        <a href="/" className="logo">Cogzin</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Cogzin"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
        <div className="header-right">
          <button className="cart-toggle" onClick={() => setIsCartOpen(!isCartOpen)}>
            Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </header>

      <nav className="navigation">
        <div className="nav-links">
          <a href="/">All</a>
          <a href="/">Today's Deals</a>
          <a href="/">Customer Service</a>
          <a href="/">Registry</a>
          <a href="/">Gift Cards</a>
          <a href="/">Sell</a>
        </div>
      </nav>

      <main className="main-content">
        {isCartOpen ? (
          showCheckoutForm ? (
            <div className="checkout-form">
              <h2>Checkout</h2>
              <form onSubmit={handleCheckout}>
                <div className="form-section">
                  <h3>Shipping Information</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={checkoutForm.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={checkoutForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={checkoutForm.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={checkoutForm.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={checkoutForm.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        value={checkoutForm.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={checkoutForm.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Payment Information</h3>
                  <div className="form-group">
                    <select
                      name="paymentMethod"
                      value={checkoutForm.paymentMethod}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={checkoutForm.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={checkoutForm.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={checkoutForm.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="order-summary">
                  <h3>Order Summary</h3>
                  {cart.map(item => (
                    <div key={item.id} className="order-item">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="order-total">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button type="submit" className="submit-order">Place Order</button>
              </form>
            </div>
          ) : (
            <div className="checkout-section">
              <h2 className="checkout-header">Shopping Cart</h2>
              <div className="checkout-items">
                {cart.map(item => (
                  <div key={item.id} className="checkout-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <div className="price-section">
                        <span className="price">${item.price.toFixed(2)}</span>
                      </div>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="checkout-summary">
                <div className="summary-row">
                  <span>Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items):</span>
                  <span className="grand-total">${calculateTotal().toFixed(2)}</span>
                </div>
                <button className="checkout-button" onClick={() => setShowCheckoutForm(true)}>Proceed to Checkout</button>
              </div>
            </div>
          )
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="price-section">
                    <span className="price">${product.price.toFixed(2)}</span>
                    {product.originalPrice > product.price && (
                      <>
                        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                        <span className="discount">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="rating">
                    <div className="stars">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span>({product.reviews})</span>
                  </div>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
