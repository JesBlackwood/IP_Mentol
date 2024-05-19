import React from "react"
import styles from "./header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className={styles.main}>
            <h1>
                <Link to={"/"} className={styles.title}>
                    suvorova natalya
                </Link>
            </h1>
            <div className={styles.linkWrapper}>
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
        </div>
    )
}

export default Header
