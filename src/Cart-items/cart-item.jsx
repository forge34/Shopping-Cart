import styles from "./cart-item.module.css";
import PropTypes from "prop-types";

function CartItem({ name, price, url }) {
  console.log(url)
  return (
    <div className={styles.container}>
      <img src={url} width={"220px"}></img>

      <div className={styles.info}>
        <h3> Game Name : {name}</h3>
        <h3> Game Price : {price}$</h3>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
};

export default CartItem;
