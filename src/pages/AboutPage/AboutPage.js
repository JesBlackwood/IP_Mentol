import React, { useEffect } from "react"
import Header from "../../componets/Header/Header"
import HeaderMobile from "../../componets/HeaderMobile/HeaderMobile"
import styles from "./aboutPage.module.css"
import Footer from "../../componets/Footer/Footer"

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {

    useEffect(() => {
        AOS.init({
          duration: 1100, // Длительность анимации в миллисекундах
          easing: 'ease-in-out',
          anchorPlacement: 'top-center',
        });
    }, []);
    
    return (
        <div className={styles.main}>
            <HeaderMobile />
            <Header />
            <div>
                <div className={styles.cicrle}></div>
                <div>
                    <div></div>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperTitleTextMobile}>
                            <p className={styles.titleTextMobile}>about me</p>
                        </div>
                        <img className={styles.img}
                            src={"img/aboutImage.jpg"}
                            alt=""
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-out"
                        />
                        <div className={styles.text}>
                            <div className={styles.wrapperTitleText}>
                                <p className={styles.titleText}>about me</p>
                            </div>
                            <p className={styles.textParagraph} data-aos="fade-up" data-aos-delay="100">Здравствуйте, я Суворова Наталья.</p>
                            <p className={styles.textParagraph} data-aos="fade-up" data-aos-delay="200">
                                Мастер по маникюру, бровям и ресницам из Стерлитамака.
                            </p>
                            <p className={styles.textParagraph} data-aos="fade-up" data-aos-delay="300">
                                Помогаю девушкам подчеркнуть их взгляд и сделать лицо более выразительным. Когда не
                                хочется тратить время на оформление бровей, ресниц или маникюра по утрам, можно
                                обратиться к мастеру. После оформления бровей, наращивания ресниц и маникюра ты будешь
                                тратить на свой ежедневный уход гораздо меньше времени.
                            </p>
                            <p className={styles.textParagraph} data-aos="fade-up" data-aos-delay="300">
                                В своей работе я использую профессиональные средства, содержащие ухаживающие вещества,
                                которые улучшат состояние ногтей и волос.
                            </p>
                            <p className={styles.textParagraph} data-aos="fade-up" data-aos-delay="400">
                                Процедура проходит легко и быстро, я учитываю все твои особенности, подбираю лучшую
                                форму и рассказываю про дальнейший уход.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div className={styles.wrapperTwo}>
                        <div className={styles.mainNumber}>
                            <div className={styles.wrapperNumber} data-aos="fade-up" data-aos-delay="300">
                                <p className={styles.textNumber}>01</p>
                                <p className={styles.textItem}>Обработка инструментов происходит в 3 этапа: дезинфекция, очистка и стерлизация</p>
                            </div>
                            <div className={styles.wrapperNumber} data-aos="fade-up" data-aos-delay="300">
                                <p className={styles.textNumber}>02</p>
                                <p className={styles.textItem}>Выполню дизайн любой сложности, на ваш вкус и цвет</p>
                            </div>
                            <div className={styles.wrapperNumber} data-aos="fade-up" data-aos-delay="300">
                                <p className={styles.textNumber}>03</p>
                                <p className={styles.textItem}>Опыт в бьюти-сфере <br /> более 3 лет</p>
                            </div>
                        </div>
                        <img
                            className={styles.imgNumber}
                            src={"img/aboutImage3.png"}
                            alt=""
                            data-aos="fade-left" 
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-out"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage
