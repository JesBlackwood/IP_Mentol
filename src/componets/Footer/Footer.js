import React from "react"
import styles from "./footer.module.css"

const backgroundImage = "/img/backgroundFooter.png"

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.image} style={{ backgroundImage: `url(${backgroundImage}` }}>
                <div className={styles.wrapper}>
                    <p className={styles.text}>Телефон:</p>
                    <p className={styles.number}>+7 917-359-50-38</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
