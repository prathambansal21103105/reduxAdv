import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const totalCartItems=useSelector((state)=>{
    return state.cart.totalQuantity;
  });
  return (
    <button className={classes.button} {...props}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
