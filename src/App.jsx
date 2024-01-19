import Header from "./Header/header";
import style from "./common-styles/app.module.css"
import ItemSection from "./item-section/item-section";


const App = () => {
  return (
    <div className={style.container}>
    <Header></Header>
    <ItemSection></ItemSection>
    </div>
  );
};

export default App
