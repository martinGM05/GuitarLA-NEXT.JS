import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = ({childre}) => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className="contenedor">
                <h2 className="heading">Nostros</h2>
                <div className={styles.contenido}>
                        <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Nosotros" />

                    <div>
                        <p>
                            Consectetur consectetur sint mollit non aute ipsum. Aute deserunt deserunt irure ex velit aliquip in est fugiat enim amet consequat. Laborum adipisicing voluptate veniam irure consequat esse officia adipisicing dolore ex culpa incididunt sint. Non velit do deserunt ullamco ut cupidatat aliquip minim minim eiusmod. Id elit irure minim consectetur enim anim mollit consectetur consectetur occaecat. Duis adipisicing proident velit eu labore deserunt do ipsum consequat aliqua occaecat anim velit.
                        </p> 
                        <p>
                            Irure quis mollit esse veniam anim sint enim officia in id mollit. Eiusmod laborum anim exercitation aute laboris ex commodo commodo. Incididunt sit sunt nisi irure incididunt veniam dolore cillum proident.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros

