import React from "react"
import Header from "../../componets/Header/Header"
import HeaderMobile from "../../componets/HeaderMobile/HeaderMobile"
import styles from "./worksPage.module.css"
import Footer from "../../componets/Footer/Footer"
import WorksImages from "./UI/WorksImages/WorksImages"

const WorksPage = () => {
    return (
        <div className={styles.main}>
            <HeaderMobile />
            <Header />
            <div className={styles.textWrapper}>
                <p className={styles.text}>
                    Здравствуйте, я Суворова Наталья. <br /> Мастер по маникюру, бровям и ресницам из Стерлитамака.
                </p>
            </div>
            <WorksImages />
            <Footer />
        </div>
    )
}

export default WorksPage
