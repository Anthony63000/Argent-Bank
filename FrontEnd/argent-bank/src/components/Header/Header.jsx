import styles from "./header.module.scss";
import { logout } from '../../Redux/authSlice';
import  { clearUserProfile }  from '../../Redux/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../Redux/userSlice";
import { useEffect } from "react";
import Cookies from "js-cookie";

import { NavLink } from 'react-router-dom'

import logo from "../../assets/images/argentBankLogo.webp"

function Header() {

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logout()); 
        dispatch(clearUserProfile());
    }

    const userProfile = useSelector((state) => state.userProfile.userProfile)
    const token = Cookies.get('token');

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile(token))
        }
    }, [dispatch, token])

    const logoSignOut = <i className="fa-solid fa-arrow-right-from-bracket"></i>
    const userClassLogo = <i className="fa-solid fa-circle-user"></i>;

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <NavLink
                        className={styles.linkLogo}
                        to={"/"}
                    >
                        <img 
                            className={styles.logo}
                            src={logo}
                            alt="Argent Bank Logo" 
                        />
                        <h1 className={styles.title}>
                            Argent bank
                        </h1>
                    </NavLink>
                </div>
                <div className={styles.rightContainer}>
                    <nav className={styles.navigationContainer}>
                        <ul className={styles.listContainer}>
                                <NavLink
                                to={"/User"}
                                className={styles.link}
                            >
                                {userProfile ?  userClassLogo : userClassLogo}
                                <li className={styles.list}>
                                    {userProfile ? userProfile?.firstName : ""}
                                </li>
                            </NavLink>
                            <NavLink
                                to={userProfile ? "/" : "/SignIn"}
                                className={styles.link}
                            >
                                {userProfile ? logoSignOut : ""}
                                <li className={styles.list}
                                    onClick={signOut}
                                >
                                    {userProfile ? "Sign Out" : "Sign In"}
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;