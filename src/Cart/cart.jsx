import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import CartItem from "../Cart-items/cart-item";
import styles from "./cart.module.css";

const sum = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + Number(curr.price)
  },0);
};

function CartPage({}) {
  const [, , cartData] = useOutletContext();

  const total = sum(cartData);
  console.log(total);

  return (
    <div className={styles.container}>
      {cartData.map((item) => {
        return (
          <CartItem
            key={item.name}
            name={item.name}
            price={item.price}
          ></CartItem>
        );
      })}

      <h1>Total : {total}$</h1>
    </div>
  );
}

CartPage.propTypes = { cartData: PropTypes.array };

export default CartPage;
