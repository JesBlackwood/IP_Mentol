import React, { useState } from "react"
import styles from "./worksImages.module.css"
import WorksGallery from "./UI/WorksGallery/WorksGallery"
import WorksImage from "./UI/WorksImage/WorksImage"

const ImageList = [
    { src: "/img/work1.jpg" },
    { src: "/img/work2.jpg" },
    { src: "/img/work3.jpg" },
    { src: "/img/work4.jpg" },
    { src: "/img/work5.jpg" },
    { src: "/img/work6.jpg" },
    { src: "/img/work7.jpg" },
    { src: "/img/work8.jpg" },
    { src: "/img/work9.jpg" },
    { src: "/img/work10.jpg" },
    { src: "/img/work11.jpg" },
    { src: "/img/work12.jpg" },
    { src: "/img/work13.jpg" },
    { src: "/img/work14.jpg" },
    { src: "/img/work15.jpg" },
    { src: "/img/work16.jpg" },
    { src: "/img/work17.jpg" },
    { src: "/img/work18.jpg" },
    { src: "/img/work19.jpg" },
    { src: "/img/work20.jpg" },
    { src: "/img/work21.jpg" },
    { src: "/img/work22.jpg" },
    { src: "/img/work23.jpg" },
]

const WorksImages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <div>
            <div className={styles.images}>
                {ImageList.map((image, index) => (
                    <WorksImage
                        key={index}
                        pathUrl={image.src}
                        onClick={() => {
                            setIsOpen(true);
                            setSelectedImageIndex(index);
                        }}
                    />
                ))}
            </div>
            {isOpen && (
                <WorksGallery
                    onClick={() => setIsOpen(false)} // Закрываем галерею
                    images={ImageList} // Передаем массив с изображениями в галерею
                    initialSlide={selectedImageIndex} // Передаем индекс выбранной картинки
                />
            )}
        </div>
    )
}

export default WorksImages
