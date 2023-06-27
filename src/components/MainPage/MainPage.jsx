import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from '../../components/MainPage/MainPage.module.css'
import logogmh from '../../assets/logogmh.png'
// import siluetabotella from '../../assets/siluetabotella.png'
import productosgmh1 from '../../assets/productosgmh1.png'
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.mainContainer}>
            <div className={styles.productsContainer}>
                <div className={styles.productContainer}>
                    <Link className={styles.link} to={'/productos'}>
                        <img className={styles.productExample} src={productosgmh1} alt="productosgmh1" />
                    </Link>
                </div>
                <div className={styles.productContainer2}>
                <Link className={styles.link} to={'/productos'}>
                        <img className={styles.productExample2} src={productosgmh1} alt="productosgmh1" />
                    </Link>
                </div>
                <div className={styles.productContainer3}>
                <Link className={styles.link} to={'/productos'}>
                        <img className={styles.productExample3} src={productosgmh1} alt="productosgmh1" />
                    </Link>
                </div>
            </div>
            <div className={styles.presentationContainer}>
                <img className={styles.logo} src={logogmh} alt="logo" />
                <h2 className={styles.name}>ADEREZOS GONMOHER</h2>
                <p>COMPROMETIDOS CON LA CALIDAD!</p>
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
