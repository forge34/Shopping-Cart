import style from "./header.module.css";

export default function Header({ItemNumber}) {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Shopping Cart</h1>

      <button className={style.hbtn + " push"}>Home</button>
      <button className={style.hbtn}>Cart</button>
      <img className={style.icon} src="shopping_cart.svg"></img>
      <p>{ItemNumber ? ItemNumber:0} </p>
    </div>
  );
}
