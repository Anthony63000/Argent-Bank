
import styles from "../assets/styles/global.module.scss"
import BannerHome from "../components/BannerHome/BannerHome";
import Header from "../components/Header/Header";
import FeaturesHome from "../components/FeaturesHome/FeaturesHome"
import Footer from "../components/Footer/Footer";

function Home() {

    const userClassLogo = <i className="fa-solid fa-circle-user"></i>;

    return (
        <div className={styles.app}>
            <Header 
                signInOut="Sign In"
                userClassLogo={userClassLogo}
            />
            <main>
                <BannerHome />
                <FeaturesHome />
            </main>
            <Footer />
        </div>
    )
}

export default Home;