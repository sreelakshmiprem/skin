import React, { useState } from 'react';
import './Checkout.css';
import Button from 'react-bootstrap/Button';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    paymentMethod: ''
  });

  const [cartItems, setCartItems] = useState([
    { id: 1, 
      name: 'Product 1', 
      price: 230, 
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1612885645-51nfuxdgizl-sl1000-1612885634.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    { id: 2,
      name: 'Product 2', 
      price: 450, 
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664898681-s2286375-main-zoom-1664898675.jpg?crop=1xw:1xh;center,top&resize=980:*' 
    },
    { id: 3,
      name: 'Product 3', 
      price: 210,
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1596202772-best-skin-care-products-1596202753.jpg?crop=1xw:1xh;center,top&resize=980:*' 
    }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Cart Items:', cartItems);
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      paymentMethod: ''
    });
  };

  const formatPriceInRupees = (price) => {
    return price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  };

  const getTotalPrice = () => {
    return formatPriceInRupees(cartItems.reduce((total, item) => total + item.price, 0));
  };

  return (
    <div className="checkout-page">
      <div className="cart-details">
        <h2 className="section-heading">Cart Details</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{formatPriceInRupees(item.price)}</p>
            </div>
          </div>
        ))}
        <h6 className="total-price">Total: {getTotalPrice()}</h6>
      </div>
      <div className="billing-info">
        <h4 className="section-heading">Billing Information</h4>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="ind">India</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="upi">UPI</option>
             
            </select>
          </div>

          <Button variant="primary">Place Order</Button>{' '}
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;