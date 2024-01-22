import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items=useSelector((state)=>{
    return state.cart.items;
  })
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
        items.map((element)=><CartItem
       key={element.id}   item={{ title: element.title, quantity: element.quantity, total: element.total, price: element.price, id:element.id }}
        />)
        }
      </ul>
    </Card>
  );
};

export default Cart;
