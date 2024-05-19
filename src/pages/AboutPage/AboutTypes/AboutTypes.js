import React from "react"
import styles from "./aboutTypes.module.css"

const AboutTypes = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <p className={styles.textNumber}>01</p>
                <p className={styles.textItem}>Обработка инструментов происходит в 3 этапа: дезинфекция, очистка и стерлизация</p>
            </div>
            <div className={styles.text}>
                <p className={styles.textNumber}>02</p>
                <p className={styles.textItem}>Выполню дизайн любой сложности, на ваш вкус и цвет</p>
            </div>
            <div className={styles.text}>
                <p className={styles.textNumber}>03</p>
                <p className={styles.textItem}>Опыт в бьюти-сфере <br /> более 3 лет</p>
            </div>
        </div>
    )
}

export default AboutTypes
