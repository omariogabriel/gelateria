import Image from "next/image"
import Logo from "../../../public/logo.png"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Image className={styles.header_logo} src={Logo} alt="Logo da Gelateria"/>
            <nav>
                <Link className={styles.header_link} href="/">Home</Link>
                <Link className={styles.header_link} href="/sobre">Sobre</Link>
                <Link className={styles.header_link} href="/sabores">Sabores</Link>
            </nav>
        </header>
    )
}