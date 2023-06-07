import { Link } from 'react-router-dom'
import styles from './Productos.module.css'
import logogmh from '../../assets/logogmh.png'
import producto1 from '../../assets/producto1.png'
import producto2 from '../../assets/producto2.png'
import producto3 from '../../assets/producto3.png'
import producto4 from '../../assets/producto4.png'

export const Productos = () => {
  return (
    <div className={styles.sectionProductsContainer}>
      <div className={styles.titleLogoContainer}>
        <div className={styles.titleContainer}>
          <h1>Aderezos Gonmoher</h1>
          <h3>productos</h3>
        </div>
        <div className={styles.logoInicio}>
          <Link className={styles.link} to={'/'}><img className={styles.logo} src={logogmh} alt="logo" /></Link>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <img className={styles.img} src={producto1} alt="producto1" />
        <img className={styles.img} src={producto2} alt="producto2" />
        <img className={styles.img} src={producto3} alt="producto3" />
        <img className={styles.img} src={producto4} alt="producto4" />
      </div>
    </div>
  )
}
