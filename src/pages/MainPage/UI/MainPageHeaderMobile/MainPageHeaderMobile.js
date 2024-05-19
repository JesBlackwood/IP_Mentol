import { React, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./mainPageHeaderMobile.module.css"

const MainPageHeaderMobile = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.main}>
            <div
                className={isActive ? styles.wrapper_top_active : styles.wrapper_top}
                onClick={() => setIsActive(!isActive)}
            ></div>
            <div className={isActive ? styles.wrapper_active : styles.wrapper} onClick={() => setIsActive(!isActive)}>
                <Link className={styles.link} to={"services"}>
                    services
                </Link>
                <Link className={styles.link} to={"contacts"}>
                    contacts
                </Link>
                <Link className={styles.link} to={"about"}>
                    about
                </Link>
            </div>
            <div
                className={isActive ? styles.button_active : styles.button}
                onClick={() => setIsActive((prevState) => !prevState)}
            >
                <div className={isActive ? styles.line_active : styles.line}></div>
                <div className={isActive ? styles.line_active : styles.line}></div>
                <div className={isActive ? styles.line_active : styles.line}></div>
            </div>
        </div>
    )
}

export default MainPageHeaderMobile
