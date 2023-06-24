import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./Contacto.module.css"

export const Contacto = () => {
  return (
    <div className={styles.contactContainer}>
        <h1>FORMULARIO DE CONTACTO</h1>
        <div className={styles.contactSectionsContainer}>
            <div className={styles.contacts}>
                <p>consulta@correo.com</p>
                <p>Direccion</p>
                <p>Numero de telefono</p>
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className={`${styles.socialMediaIcons} ${styles.igIcon}`}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className={`${styles.socialMediaIcons} ${styles.fbIcon}`}/></a>
                </div>
            </div>
            <div className={styles.formContainer}>
                <h2>CONTACTO</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Correo Electrónico" />
                    <input type="text" placeholder="Asunto" />
                    <textarea type="text" placeholder="Mensaje"/>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
