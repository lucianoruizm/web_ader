import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
            <Link to={'/'}>
                <li>Inicio</li>
            </Link>
            <Link to={'/productos'}>
                <li>Productos</li>
            </Link>
            <Link to={'/contacto'}>
                <li>Contacto</li>
            </Link>
        </ul>
    </nav>
  )
}
