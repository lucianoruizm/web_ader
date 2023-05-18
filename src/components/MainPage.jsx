import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from '../components/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navbar}>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                </ul>
            </nav>
            <div className={styles.productMediaContainer}>
                <div className={styles.product}>
                    <img className={styles.item1} src="../assets/siluetaBotella.png" alt="productoEjemplo" />
                    <h2 className={styles.item2}>Producto Ejemplo</h2>
                </div>
                <img className={styles.item3} src="../assets/logoEjemplo.png" alt="logo" />
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className={`${styles.socialMediaIcons}${styles.igIcon}`}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className={`${styles.socialMediaIcons}${styles.fbIcon}`}/></a>
                </div>
            </div>
        </div>
    )
};
