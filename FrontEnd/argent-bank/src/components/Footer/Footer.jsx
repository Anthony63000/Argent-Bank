
import styles from "./footer.module.scss"

function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <p className={styles.text}>
                    Copyright 2020 Argent Bank
                </p>
            </div>
        </footer>
    )
}

export default Footer;