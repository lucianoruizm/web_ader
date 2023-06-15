import { Link } from 'react-router-dom'
import styles from './Productos.module.css'
import logogmh from '../../assets/logogmh.png'
import producto1 from '../../assets/producto1.png'
import producto2 from '../../assets/producto2.png'
import producto3 from '../../assets/producto3.png'
import producto4 from '../../assets/producto4.png'
import imgExample from '../../assets/imgExample.png'

export const Productos = () => {
  return (
    <div>
      <div className={styles.sectionProductsContainer}>
        <div className={styles.titleLogoContainer}>
          <div className={styles.titleContainer}>
            <h1>ADEREZOS GONMOHER</h1>
            <h3>PRODUCTOS</h3>
          </div>
          <div className={styles.logoInicio}>
            <Link className={styles.link} to={'/'}><img className={styles.logo} src={logogmh} alt="logo" /></Link>
          </div>
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.productImgTitleContainer}>
            <img className={styles.img} src={producto1} alt="producto1" />
            <h4>BERENJENAS EN ESCABECHE</h4>
          </div>
          <div className={styles.productImgTitleContainer}>
            <img className={styles.img} src={producto2} alt="producto2" />
            <h4>PICKLES</h4>
          </div>
          <div className={styles.productImgTitleContainer}>
            <img className={styles.img} src={producto3} alt="producto3" />
            <h4>ADEREZO DE ZANAHORIA</h4>
          </div>
          <div className={styles.productImgTitleContainer}>
            <img className={styles.img} src={producto4} alt="producto4" />
            <h4>ADEREZO DE REMOLACHA</h4>
          </div>
        </div>
      </div>
      <div className={styles.tiposProductosContainer}>
        <h2>TIPOS DE PRODUCTOS</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img className={styles.cardImg} src={imgExample} alt="imExample"/>
            <div className={styles.textContainer}>
              <h4>Aderezos</h4>
              <p>Remolacha- Zanahoria- Espinacas- Morrón al Ajillo- Verdeo y Roquefort</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImg} src={imgExample} alt="imExample"/>
            <div className={styles.textContainer}>
              <h4>Conservas</h4>
              <p>Berenjenas en escabeche- Morrones en escabeche- Pickles</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.cardImg} src={imgExample} alt="imExample" />
            <div className={styles.textContainer}>
              <h4>Mermeladas</h4>
              <p>Manzana- Naranja- Higo- Ciruelas- Durazno- Mix de Frutas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
