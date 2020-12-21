import React from 'react';
import './Checkout.css';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../../components/Subtotal/Subtotal';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
        
        <h3>Hello, {user?.email}</h3>
        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          <FlipMove>
          {basket.map((item, i) => (
            <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
