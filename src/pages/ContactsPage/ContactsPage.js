import React from "react"
import Header from "../../componets/Header/Header"
import HeaderMobile from "../../componets/HeaderMobile/HeaderMobile"
import styles from "./contactsPage.module.css"

const ContactsPage = () => {
    return (
        <div className={styles.main}>
            <HeaderMobile />
            <Header />
            <div className={styles.wrapperCicrle}>
                <div className={styles.cicrle}></div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>contacts</p>
                <div className={styles.textWrapper}>
                    <p className={styles.textTitle}>Адреса:</p>
                    <p>г. Стерлитамак ул.Набережная 3/4</p>
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.textTitle}>Телефон:</p>
                    <p>+7 917-359-50-38</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage
