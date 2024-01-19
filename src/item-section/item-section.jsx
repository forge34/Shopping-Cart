import Card from "../item-card/item-card";
import styles from "./item-section.module.css"
import PropTypes from "prop-types"

const items = [0,1,2,3,4,5]

function ItemSection({setNumber}) {


  return (
    <div className={styles.container}>
     {items.map( (item) => {
        return <><Card key={item} onClick={setNumber}></Card></>
     })}
    </div>
  );
}

ItemSection.propTypes = {
    setNumber:PropTypes.func
}

export default  ItemSection