import React, { useRef, useState, useEffect } from "react"
import styles from "./worksGallery.module.css"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GalleryControls from "./GalleryControlls/GalleryControlls"

const WorksGallery = ({ onClick, images, initialSlide }) => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(initialSlide);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next), // Обновляем текущий слайд
        initialSlide,
        afterChange: (current) => setCurrentSlide(current), // Обновляем текущий слайд после изменения
    };

    //Обработчик нажатия клавиш
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClick(); // Закрываем галерею
        } else if (e.key === 'ArrowLeft') {
            sliderRef.current.slickPrev();
        } else if (e.key === 'ArrowRight') {
            sliderRef.current.slickNext();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.indexDisplay}>
                <img className={styles.img} src={"img/galleryDisplay.svg"} alt="" />
                {currentSlide + 1}/{images.length}
            </div>
            <div className={styles.bar} onClick={onClick}>
                <img src={"img/galleryClose.svg"} alt="" />
            </div>          
            <GalleryControls
                previousSlide={() => sliderRef.current.slickPrev()}
                nextSlide={() => sliderRef.current.slickNext()}
            >
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                    <div key={index} className={styles.sliderWrapper}>
                        <img className={styles.sliderItem} src={image.src} alt="" />
                    </div>
                    ))}
                </Slider>
            </GalleryControls>
        </div>
    )
}

export default WorksGallery
