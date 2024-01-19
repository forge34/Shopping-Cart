import styles from "./item-card.module.css";
import PropTypes from "prop-types";

function Card({ itemName = "Name", itemPrice = "0$", imgUrl = "", onClick }) {
  return (
    <div className={styles.card}>

      <img width={"240px"} height={"240px"}></img>
      <div className={styles["card-info"]}>
        <h3 aria-label="item-name">{itemName}</h3>
        
        <h3 aria-label="item-price" className="push">
          {itemPrice}
        </h3>

        <button className={styles.cbtn} onClick={onClick}>
          +
        </button>

      </div>
    </div>
  );
}

Card.propTypes = {
  itemName: PropTypes.string,
  itemPrice: PropTypes.string,
  imgUrl: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
