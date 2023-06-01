import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from '../../components/MainPage/MainPage.module.css'
import logogmh from '../../assets/logogmh.png'
import siluetabotella from '../../assets/siluetabotella.png'
import productosgmh1 from '../../assets/productosgmh1.png'
import { Navbar } from "../Navbar/Navbar";

export const MainPage = () => {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.mainContainer}>
            <Navbar />
            <div className={styles.productsContainer}>
                <div className={styles.productContainer}>
                    <img className={styles.productExample} src={productosgmh1} alt="productosgmh1" />
                    <div className={styles.textContainer}>
                        <h2 className={styles.productText}>Producto Ejemplo</h2>
                    </div>
                </div>
                <div className={styles.productContainer2}>
                    <img className={styles.productExample2} src={siluetabotella} alt="productoEjemplo" />
                    <div className={styles.textContainer2}>
                        <h2 className={styles.productText2}>Producto Ejemplo</h2>
                    </div>
                </div>
                <div className={styles.productContainer3}>
                    <img className={styles.productExample3} src={siluetabotella} alt="productoEjemplo" />
                    <div className={styles.textContainer3}>
                        <h2 className={styles.productText3}>Producto Ejemplo</h2>
                    </div>
                </div>
            </div>
            <div className={styles.presentationContainer}>
                <img className={styles.logo} src={logogmh} alt="logo" />
                <h2 className={styles.name}>Aderezos Gonmoher</h2>
                <p>Comprometidos con la calidad!</p>
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className={`${styles.socialMediaIcons} ${styles.igIcon}`}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className={`${styles.socialMediaIcons} ${styles.fbIcon}`}/></a>
                </div>
            </div>
        </div>
        <div className={styles.info}>
        </div>
      </div>
    )
};
