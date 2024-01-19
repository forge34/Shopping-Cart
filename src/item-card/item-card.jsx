import styles from "./item-card.module.css"

export default function Card(){

    return <div className={styles.card}>
        <img width={"320px"} height={"320px"}></img>
        <div className={styles['card-info']}>
            <h3>Item name</h3>
            <h3 className="push">Item price $</h3>
        </div>
    </div>
}