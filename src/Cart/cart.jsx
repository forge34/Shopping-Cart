import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import CartItem from "../Cart-items/cart-item";
import styles from "./cart.module.css";

function CartPage({}) {
  const [, , cartData] = useOutletContext();

  console.log(cartData);
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

      <h1>Total : {  }
        $</h1>
    </div>
  );
}

CartPage.propTypes = { cartData: PropTypes.array };

export default CartPage;
