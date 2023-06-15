import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
            <Link to={'/'}>
                <li>INICIO</li>
            </Link>
            <Link to={'/productos'}>
                <li>PRODUCTOS</li>
            </Link>
            <Link to={'/empresa'}>
                <li>EMPRESA</li>
            </Link>
            <Link to={'/contacto'}>
                <li>CONTACTO</li>
            </Link>
        </ul>
    </nav>
  )
}
