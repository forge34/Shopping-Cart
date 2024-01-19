import { useNavigate } from "react-router-dom";
import style from "./header.module.css";
import PropTypes, { func } from "prop-types";


function Header({ ItemNumber }) {
  const navigate = useNavigate();

  function toCart(){
    navigate("./cart")
  }
  
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Shopping Cart</h1>

      <button className={style.hbtn + " push"} onClick={ () => {
        navigate("/")
      }}>Home</button>
      <img className={style.icon} src="shopping_cart.svg" onClick={toCart}></img>
      <p>{ItemNumber ? ItemNumber : 0} </p>
    </div>
  );
}

Header.propTypes = {
  ItemNumber: PropTypes.number,
};

export default Header;
