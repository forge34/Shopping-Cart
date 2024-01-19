import Card from "../item-card/item-card";
import styles from "./item-section.module.css"

export default function ItemSection(params) {
  return (
    <div className={styles.container}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}
