import Image from "next/image";
import styles from "./footer.module.css";
import Logo from "../../../public/logo.png";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.info_container}>
                <Image src={Logo} className={styles.img_footer} />
                <div>
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos, 98
                    São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>Contato</h3>
                    <p>info@meusite.com
                    Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h3>Horarios</h3>
                    <p>ABERTO TODOS OS DIAS
                    10:00 - 22:00</p>
                </div>
            </div>

            <div className={styles.footer_rights}>
                <p>Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p>
            </div>
        </footer>
    )
}
