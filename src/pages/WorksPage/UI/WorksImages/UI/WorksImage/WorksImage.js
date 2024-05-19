import React from "react"
import styles from "./worksImage.module.css"

const WorksImage = ({ pathUrl, onClick }) => {
    return <img className={styles.imgItem} src={pathUrl} alt="" onClick={onClick} />
}

export default WorksImage
