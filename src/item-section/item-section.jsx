/* eslint-disable react/prop-types */
import { useOutletContext } from "react-router-dom";
import Card from "../item-card/item-card";
import styles from "./item-section.module.css";
import PropTypes, { array } from "prop-types";

const size = [...Array(39).keys()].map((i) => i + 1);

// eslint-disable-next-line react/prop-types
function ItemSection({}) {
  const [set, itemData] = useOutletContext();

  return (
    <div className={styles.container}>
      {size.map((item) => {
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
