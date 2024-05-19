import React from "react"
import styles from "./GalleryControlls.module.css"

const GalleryControls = ({ children, nextSlide, previousSlide }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.control} src="/img/chevronlLeft.svg" alt="" onClick={previousSlide} />
            <div className={styles.slider}>{children}</div>
            <img className={styles.control} src="/img/chevronlRight.svg" alt="" onClick={nextSlide} />
        </div>
    )
}

export default GalleryControls
