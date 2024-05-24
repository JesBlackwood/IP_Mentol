import React, { useState, useEffect } from "react"
import styles from "./servicesTypes.module.css"

const ServicesTypes =  () => {
    const [activeService, setActiveService] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
   
        if (scrollTop < 850) { 
          setActiveService(0);
        } else if (scrollTop < 1400) {
          setActiveService(1);
        } else {
          setActiveService(2);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className={styles.main}>
            <div className={styles.textWrapper}> 
                <div className={styles.text}> 
                    <p className={styles.textItem}>Брови</p> 
                    <p className={styles.textItem}>Ресницы</p> 
                    <p className={styles.textItem}>Маникюр</p>
                </div>
                <div className={styles.underline}
                    style={{ 
                        left: activeService === 0 ? '0%' : 
                        activeService === 1 ? '29%' : 
                        activeService === 2 ? '66.66%' : '0%',
                    }}
                />
            </div>
        </div>
    )
}

export default ServicesTypes
