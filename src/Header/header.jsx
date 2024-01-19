import style from "./header.module.css";
import PropTypes from "prop-types";

function Header({ ItemNumber }) {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Shopping Cart</h1>

      <button className={style.hbtn + " push"}>Home</button>
      <img className={style.icon} src="shopping_cart.svg"></img>
      <p>{ItemNumber ? ItemNumber : 0} </p>
    </div>
  );
}

Header.propTypes = {
  ItemNumber: PropTypes.number,
};

export default Header;
