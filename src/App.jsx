import { useState } from "react";
import Header from "./Header/header";
import style from "./common-styles/app.module.css";
import useData from "./hooks/useData";
import { Outlet} from "react-router-dom";


const App = () => {
  const [ItemNumber, setNumber] = useState(0);
  const [cartItems, setCart] = useState([]);


  const context = [setNumber,useData() ,cartItems]

  return (
    <div className={style.container}>
      <Header ItemNumber={ItemNumber}></Header>
      <Outlet context={context}></Outlet>
    </div>
  );
};

export default App;
