/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import Card from "../item-card/item-card";
import styles from "./item-section.module.css";
import PropTypes from "prop-types";

const items = [0, 1, 2, 3, 4, 5,6,7];

// eslint-disable-next-line react/prop-types
function ItemSection({ }) {
  
  const [set,itemData] = useOutletContext()
  
  return (
    <div className={styles.container}>
      {items.map((item) => {
        const info = itemData[item];

        if (info) {
          return (
            <Card
              key={info.name}
              set={set}
              itemName={info.name}
              itemPrice={info.reviews_text_count}
              imgUrl={info.background_image}
            ></Card>
          );
        } else {
          <Card set={set}></Card>;
        }
      })}
    </div>
  );
}

ItemSection.propTypes = {
  set: PropTypes.func,
};

export default ItemSection;
