import { Link } from 'react-router-dom';
import styles from './Empresa.module.css'
import logogmh from '../../assets/logogmh.png'
import { Navbar } from '../Navbar/Navbar';

export const Empresa = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.empresaInfoContainer}>
                <div className={styles.titleLogoContainer}>
                    <div className={styles.logoInicio}>
                        <Link className={styles.link} to={'/'}><img className={styles.logo} src={logogmh} alt="logo" /></Link>
                    </div>
                    <div className={styles.titleContainer}>
                        <h2>HISTORIA DE ADEREZOS GONMOHER</h2>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.text1}>
                        <h3>PRODUCTOS GONMOHER</h3>
                        <p>
                           Una empresa pensada y creada para satisfacer la necesidad de complementar los sabores en los alimentos.
                        </p>
                        <h3>Antecedentes del Emprendimiento</h3>
                        <p>
                            El primer producto comenzó a comercializarse en el año 1999; poco a poco se fue haciendo parte de aquellos que la degustaron como novedad,
                            afianzándose en los hogares; como todo producto innovador, inició su comercialización entre familiares y amigos, con un alto grado de aceptación.
                            Luego, el mismo se trasladó a las ferias conocidas como “Trueque” (Sistema de intercambio de productos utilizado como alternativa comercial)
                            donde los adquirientes demostraron su beneplácito y fueron generando una demanda continua, en crecimiento.
                        </p>
                    </div>
                    <div className={styles.text2}>
                        <h3>PROPUESTA DE VALOR</h3>
                        <p>
                            <strong>a. Productos GONMOHER asume un compromiso fidedigno con el Cliente (Nuestro Objeto de Atención)</strong>, con la Comunidad Empresarial (Nuestra Raíz),
                            y con la salud colectiva (Nuestro aporte a la Comunidad), en un esfuerzo permanente y organizado, a fin de proponer soluciones a la demanda poblacional,
                            en materia que contribuya a una mejora de la salud y de la calidad de vida.
                        </p>
                        <p>
                            <strong>b. Productos GONMOHER mantiene un alto compromiso con el cliente</strong>, incluyendo en su haber,
                            la investigación continua sobre nutrientes y no nutrientes que tiendan a favorecer la salud colectiva. Incorpora, de manera innovadora, diferentes sabores que permitan
                            al cliente adquirir sus productos para condimentar alimentos o no alimentos, teniendo en cuenta su manufactura y materia prima de primera calidad, libre de contaminantes,
                            disminuida en ácidos grasos, colesterol, sodio, entre otras, con el fin de alcanzar a todos los grupos de individuos, indistintamente de los problemas que atañen a su salud,
                            de manera que todos, y cada uno, pueda gozar de un aderezo adecuado a sus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
