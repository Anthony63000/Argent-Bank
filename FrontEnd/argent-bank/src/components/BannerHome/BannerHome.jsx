
import styles from "./bannerHome.module.scss";


function BannerHome() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    PromotedContent
                </h2>
                <div className={styles.subTitleContainer}>
                    <p className={styles.subtitle}>
                        No fees.
                    </p>
                    <p className={styles.subtitle}>
                        No minimum deposit.
                    </p>
                    <p className={styles.subtitle}>
                        High interest rates.
                    </p>
                </div>
                <p className={styles.text}>
                    Open a savings account with Argent Bank today!
                </p>
            </div>
        </div>
    )
}

export default BannerHome;