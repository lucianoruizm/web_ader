import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { AiOutlineHome } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { BsBuildings } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.ulContainer}>
            <ul>
                <Link to={'/'}>
                    <li>
                        <div className={styles.homeContainer}>
                            <AiOutlineHome />
                            INICIO
                        </div>
                    </li>
                </Link>
                <Link to={'/productos'}>
                    <li>
                        <div className={styles.homeContainer}>
                            <BsBag />
                            PRODUCTOS
                        </div>
                    </li>
                </Link>
                <Link to={'/empresa'}>
                    <li>
                        <div className={styles.homeContainer}>
                            <BsBuildings />
                            EMPRESA
                        </div>
                    </li>
                </Link>
                <Link to={'/contacto'}>
                    <li>
                        <div className={styles.homeContainer}>
                            <AiOutlineMail />
                            CONTACTO
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}
