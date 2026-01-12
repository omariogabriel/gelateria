import styles from "./sabores.module.css"
import Image from "next/image"
import cookiesAvela from "../../../public/sabor-cookies-avela.png"
import oreo from "../../../public/sabor-oreo.png"
import pistache from "../../../public/sabor-pistache.png"
import kiwi from "../../../public/sorbet-kiwi.png"
import limao from "../../../public/sorbet-limao.png"
import morango from "../../../public/sorbet-morango.png"



export default function Sabores () {
    return (
        <main>
            <section className={styles.banner_section}>
                <h1>Nossos Sabores</h1>
            </section>

            <section className={styles.secao_sabores}>
                <h2>Sabores de Sorvete</h2>
                <div className={styles.secao_sabores_cards}>
                    <div>
                        <Image src={oreo} className={styles.img_sabor} alt="Sorvete de Oreo" />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div>
                        <Image src={pistache} className={styles.img_sabor} alt="Sorvete de Pistache" />
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div>
                        <Image src={cookiesAvela} className={styles.img_sabor} alt="Sorvete de Cookies e Avelã" />
                        <h3>Sorvete de Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div>
                        <Image src={kiwi} className={styles.img_sabor} alt="Sorvete de Kiwi" />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div>
                        <Image src={morango} className={styles.img_sabor} alt="Sorvete de Morango" />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div>
                        <Image src={limao} className={styles.img_sabor} alt="Sorvete de Limão Siciliano" />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}