import { useOutletContext } from "react-router-dom";
import styles from "./item-card.module.css";
import PropTypes from "prop-types";

function Card({ itemName = "Name", itemPrice = "0", imgUrl = "" , set}) {

  return (
    <div className={styles.card}>
      <img src={imgUrl} width={"240px"}></img>
      <div className={styles["card-info"]}>
        <h3 aria-label="item-name">{itemName}</h3>

        <h3 aria-label="item-price">Price : {itemPrice}$</h3>

        <button className={styles.cbtn} onClick={() => {
          set(prev => prev+1)
        }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  itemName: PropTypes.string,
  itemPrice: PropTypes.number,
  imgUrl: PropTypes.string,
  set: PropTypes.func,
};

export default Card;
