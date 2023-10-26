
import styles from "../assets/styles/global.module.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserAccount from "../components/UserAccount/UserAccount";


function User() {

    return(
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <UserAccount />
            </main>
            <Footer />
        </div>
    )
}

export default User;