import { React, useState } from "react"
import styles from "./headerMobile.module.css"
import { Link } from "react-router-dom"

const HeaderMobile = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.main}>
            <h1>
                <Link to={"/"} className={styles.title}>
                    suvorova natalya
                </Link>
            </h1>
            <div
                className={isActive ? styles.wrapper_top_active : styles.wrapper_top}
                onClick={() => setIsActive(!isActive)}
            ></div>
            <div className={isActive ? styles.wrapper_active : styles.wrapper} onClick={() => setIsActive(!isActive)}>
                <Link className={styles.link} to={"/services"}>
                    services
                </Link>
                <Link className={styles.link} to={"/contacts"}>
                    contacts
                </Link>
                <Link className={styles.link} to={"/about"}>
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

export default HeaderMobile
