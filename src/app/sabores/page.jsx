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
                <h1>Nossos Saboores</h1>
                
            </section>
        </main>
    )
}