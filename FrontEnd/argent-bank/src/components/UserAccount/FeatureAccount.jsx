import styles from "./userAccount.module.scss";

function FeatureAccount({ accountTitle, accountAmount, amountDescription }) {
    return (
        <div className={styles.featureContainer}>
            <div className={styles.left}>
                <h3 className={styles.accountTitle}>
                    {accountTitle}
                </h3>
                <p className={styles.accountAmount}>
                    {accountAmount}
                </p>
                <p className={styles.amountDescription}>
                    {amountDescription}
                </p>
            </div>
            <div className={styles.right}>
                <button className={styles.buttonTransaction}>
                    View transactions
                </button>
            </div>
        </div>
    )
}

export default FeatureAccount;