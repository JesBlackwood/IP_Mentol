import React, { useState, useRef, useEffect } from "react";
import styles from "./worksImage.module.css"

const WorksImage = ({ pathUrl, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const imageContainerRef = useRef(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                  // Отключаем observer только для текущей картинки
                  observer.unobserve(entry.target);
                }
              });
            },
            {
              rootMargin: "200px 0px", 
            }
          );
      
          if (imageContainerRef.current) {
            observer.observe(imageContainerRef.current);
          }
      
          return () => observer.disconnect(); 
    }, []);
    
    return (
        <div
            className={`${styles.imageContainer} ${
            isVisible ? styles.imageVisible : ""
            }`}
            ref={imageContainerRef}
        >
            <img
                className={styles.imgPlaceholder}
                src="/img/placeholder.jpg"
                alt=""
                style={{ display: isVisible && !isImageLoaded ? "block" : "none" }}
            />

            <img
                className={styles.imgItem}
                src={pathUrl}
                alt=""
                onLoad={() => {
                    setIsImageLoaded(true); 

                    // После загрузки изображения скрываю placeholder плавно
                    const placeholder = imageContainerRef.current.querySelector(
                      `.${styles.imgPlaceholder}`
                    );

                    if (placeholder) {
                      placeholder.style.opacity = 0;
                      setTimeout(() => {
                        placeholder.style.display = "none";
                      }, 300); // Время анимации (должно совпадать с CSS)
                    }
                }}
                onClick={onClick}
                style={{ display: isVisible ? "block" : "none" }}
            />
        </div>
    );
}

export default WorksImage
