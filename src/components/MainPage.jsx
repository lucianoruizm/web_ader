import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from '../components/MainPage.module.css'
import logoejemplo from '../assets/logoejemplo.png'
import siluetabotella from '../assets/siluetabotella.png'

export const MainPage = () => {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.mainContainer}>
            <nav className={styles.navbar}>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <div className={styles.productsContainer}>
                <div className={styles.productContainer}>
                    <img className={styles.productExample} src={siluetabotella} alt="productoEjemplo" />
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
                <img className={styles.logo} src={logoejemplo} alt="logo" />
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className={`${styles.socialMediaIcons} ${styles.igIcon}`}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className={`${styles.socialMediaIcons} ${styles.fbIcon}`}/></a>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            INFO
        </div>
      </div>
    )
};
