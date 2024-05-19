import React from "react"
import styles from "./servicesTypes.module.css"

const ServicesTypes = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <p className={styles.textItem}>брови</p>
                <p className={styles.textItem}>ресницы</p>
                <p className={styles.textItem}>маникюр</p>
            </div>
        </div>
    )
}

export default ServicesTypes
