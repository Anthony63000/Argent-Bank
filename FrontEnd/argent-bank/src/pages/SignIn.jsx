import styles from "../assets/styles/global.module.scss";
import Footer from "../components/Footer/Footer";
import FormConnect from "../components/FormConnect/FormConnect";
import Header from "../components/Header/Header";

function SignIn() {

    const userClassLogo = <i className="fa-solid fa-circle-user"></i>;

    return (
        <div className={styles.app}>
            <Header 
                signInOut="Sign In"
                userClassLogo={userClassLogo}
            />
            <main className={styles.main}>
                <FormConnect />
            </main>
            <Footer />
        </div>
    )
}

export default SignIn;