import React from "react"
import Header from "../../componets/Header/Header"
import HeaderMobile from "../../componets/HeaderMobile/HeaderMobile"
import Footer from "../../componets/Footer/Footer"
import styles from "./servicesPage.module.css"
import ServicesTypes from "./ServicesTypes/ServicesTypes"

const ServicesPage = () => {
    return (
        <div className={styles.main}>
            <HeaderMobile />
            <Header />
            <div className={styles.wrapper}>
                <p className={styles.title}>price list</p>
                <div className={styles.servicesItem}>
                    <ServicesTypes />
                    <div className={styles.lines}>
                        <span className={styles.lineActive}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.servicesPrices}>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Коррекция воск/пинцет</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Окрашивание бровей</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Коррекция + Окрашивание</p>
                            <p>1000 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Коррекция + Долговременная укладка</p>
                            <p>1200 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>
                                Коррекция + Окрашивание + Долговременная укладка
                            </p>
                            <p>1500 ₽</p>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesItem}>
                    <ServicesTypes />
                    <div className={styles.lines}>
                        <span className={styles.line}></span>
                        <span className={styles.lineActive}></span>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.servicesPrices}>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Классика (1D)</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>1,5D</p>
                            <p>1200 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>2D</p>
                            <p>1400 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>2,5D</p>
                            <p>1500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>3D</p>
                            <p>1700 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Наращивание внешних уголков</p>
                            <p>800 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Мокрый эффект/эффект маскара</p>
                            <p>1600 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Лучики</p>
                            <p>+200 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Коричневые, цветные ресницы</p>
                            <p>без доплат</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Снятие с последующим наращиванием</p>
                            <p>бесплатно</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Снятие без последующего наращивания</p>
                            <p>200 ₽</p>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesItem}>
                    <ServicesTypes />
                    <div className={styles.lines}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.lineActive}></span>
                    </div>
                    <div className={styles.servicesPrices}>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Маникюр без покрытия</p>
                            <p>1000 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Маникюр с покрытием (1-2 тона)</p>
                            <p>1800 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Наращивание (1 ед.)</p>
                            <p>100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Френч</p>
                            <p>300 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Стемпинг (на все)</p>
                            <p>300 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Дизайн (в зависимости от сложности)</p>
                            <p>от 50 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Снятие (без последующего покрытия)</p>
                            <p>300 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Снятие моей работы</p>
                            <p>бесплатно</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p className={styles.servicesDescription}>Снятие чужой работы</p>
                            <p>200 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicesPage
