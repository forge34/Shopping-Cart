import { useState } from "react";
import Header from "./Header/header";
import style from "./common-styles/app.module.css";
import useData from "./hooks/useData";
import ItemSection from "./item-section/item-section";

const App = () => {
  const [ItemNumber , setNumber] = useState(0);

  return (
    <div className={style.container}>
      <Header ItemNumber={ItemNumber}></Header>
      <ItemSection setNumber={() => {
        setNumber(prev => prev+1)
      }}></ItemSection>
    </div>
  );
};

export default App;
