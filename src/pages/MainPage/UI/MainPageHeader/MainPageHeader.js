import React from "react"
import { Link } from "react-router-dom"
import styles from "./mainPageHeader.module.css"

const MainPageHeader = () => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
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
        </div>
    )
}

export default MainPageHeader
