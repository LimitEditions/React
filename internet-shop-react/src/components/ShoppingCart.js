import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../reducers/cartReducer';
import { setQuantity} from '../reducers/quantityReducer'
import { Link } from 'react-router-dom';

function ShoppingCart({ cart }) {
    const cartArray = cart.cartItems;

    const dispatch = useDispatch();
    const quantities = useSelector(state => state.quantities);

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
        dispatch(setQuantity({ productId, quantity: 0 }));
    };

    const handleChangeQuantity = (productId, newQuantity) => {
        if (newQuantity >= 1){
            dispatch(updateQuantity({ productId, quantity: newQuantity }));
            dispatch(setQuantity({ productId, quantity: newQuantity }));
        }
    };

    const totalAmount = cartArray.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <section className="contener">
            <div className="second__container cart-style">
                <div className="cart">
                    {cartArray.map(item => (
                        <div key={item.id} className="cart__item">
                            <img src={item.img} alt={`card${item.id}`} />
                            <div className="cart__content">
                                <h3 className="cart__head">{item.name}</h3>
                                <div className="cart__desc">
                                    <p>Price: <span className="cart__price">${item.price}</span></p>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.size}</p>
                                    <div >
                                        <label>Quantity:</label>
                                        <input className="cart__qty"
                                            type="number"
                                            value={item.quantity} 
                                            min="1"
                                            onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="cart__close" onClick={() => handleRemove(item.id)}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757" />
                                </svg>
                            </div>
                        </div>
                    ))}
                    <div className="cart__choose">
                        <button className="order__btn order__btn_choose">CLEAR SHOPPING CART</button>
                        <Link to={`/catalog`}><button className="order__btn order__btn_choose">CONTINUE SHOPPING</button></Link>
                    </div>
                </div>
                <div className="order">
                    <div className="order__adress">
                        <h3 className="order__heading">SHIPPING ADDRESS</h3>
                        <input id="select-colortext" type="text" value="Bangladesh" onChange={() => { }} />
                        <input type="text" value="State" onChange={() => { }} />
                        <input type="text" value="Postcode/Zip" onChange={() => { }} />
                        <button className="order__btn">GET A QUOTE</button>
                    </div>
                    <div className="order__sum">
                        <div className="order__sub">
                            <p>SUB TOTAL</p>
                            <p>${totalAmount}</p>
                        </div>
                        <div className="order__total">
                            <p className="order__total_text">GRAND TOTAL</p>
                            <p className="order__total_sum">${totalAmount}</p>
                        </div>
                        <div className="order__btn-border">
                            <button className="order__checkout">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShoppingCart;
