import React from "react"
import Header from "../../componets/Header/Header"
import HeaderMobile from "../../componets/HeaderMobile/HeaderMobile"
import styles from "./aboutPage.module.css"
import Footer from "../../componets/Footer/Footer"
import AboutTypes from "./AboutTypes/AboutTypes"

const AboutPage = () => {
    return (
        <div className={styles.main}>
            <HeaderMobile />
            <Header />
            <div>
                <div className={styles.cicrle}></div>
                <div>
                    <div></div>
                    <div className={styles.wrapper}>
                        <p className={styles.titleTextMobile}>about me</p>
                        <img className={styles.img} src={"img/aboutImage.jpg"} alt="" />
                        <div className={styles.text}>
                            <p className={styles.titleText}>about me</p>
                            <p className={styles.textParagraph}>Здравствуйте, я Суворова Наталья.</p>
                            <p className={styles.textParagraph}>
                                Мастер по маникюру, бровям и ресницам из Стерлитамака.
                            </p>
                            <p className={styles.textParagraph}>
                                Помогаю девушкам подчеркнуть их взгляд и сделать лицо более выразительным. Когда не
                                хочется тратить время на оформление бровей, ресниц или маникюра по утрам, можно
                                обратиться к мастеру. После оформления бровей, наращивания ресниц и маникюра ты будешь
                                тратить на свой ежедневный уход гораздо меньше времени.
                            </p>
                            <p className={styles.textParagraph}>
                                В своей работе я использую профессиональные средства, содержащие ухаживающие вещества,
                                которые улучшат состояние ногтей и волос.
                            </p>
                            <p className={styles.textParagraph}>
                                Процедура проходит легко и быстро, я учитываю все твои особенности, подбираю лучшую
                                форму и рассказываю про дальнейший уход.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div className={styles.wrapperTwo}>
                        <AboutTypes />
                        <img className={styles.img} src={"img/aboutImage2.jpg"} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage
