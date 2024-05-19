import { React, useState } from "react"
import MainPageHeader from "./UI/MainPageHeader/MainPageHeader"
import MainPageHeaderMobile from "./UI/MainPageHeaderMobile/MainPageHeaderMobile"
import styles from "./mainPage.module.css"
import { ReactComponent as ArrowRight } from "../../shared/img/mingcute_arrow-up-line.svg"
import { Link } from "react-router-dom"
import backgroundGif from "../../shared/background/backgroundMainPage.gif"

const MainPage = () => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className={styles.main} style={isHover ? { backgroundImage: `url(${backgroundGif})` } : undefined}>
            <MainPageHeaderMobile />
            <MainPageHeader />
            <div className={styles.circle}></div>
            <div className={styles.wrapperText}>
                <div className={styles.cellText}>
                    <p className={styles.descriptionText}>мастер по маникюру, бровям и ресницам</p>
                </div>
                <div className={styles.cellText}>
                    <p className={styles.nameText}>Suvorova</p>
                </div>
                <div className={styles.cellText}>
                    <div className={styles.arrowCellText}>
                        <p className={styles.descriptionTextArrow}>your top master</p>
                        <img className={styles.imgArrow} src="/img/teenyicons_arrow-solid.svg" alt="" />
                    </div>
                    <p className={styles.nameText}>Natalya</p>
                </div>
            </div>
            <Link to={"/works"}>
                <div
                    className={`${styles.checkWorkBlock} ${isHover && styles.active}`}
                    onMouseEnter={() => setIsHover(true)}
                >
                    <ArrowRight className={styles.checkWorkArrow} style={isHover ? { fill: "#fff" } : undefined} />
                    <Link to={"/works"} className={`${styles.checkWorkLink} ${isHover && styles.active}`}>
                        посмотреть работы
                    </Link>
                </div>
            </Link>
        </div>
    )
}

export default MainPage
