import styles from "./cart-item.module.css";
import PropTypes from "prop-types";

function CartItem({ name, price }) {
  return (
    <div className={styles.container}>
      <h3> Game Name : {name}</h3>
      <h3> Game Price : {price}$</h3>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default CartItem;
