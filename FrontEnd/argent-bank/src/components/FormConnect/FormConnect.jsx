import styles from "./formConnect.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogIn } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";


function FormConnect() {

    const userClassLogo = "fa-solid fa-circle-user";
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false)
    const isConnected = useSelector((state) => state.logIn.isConnected)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(fetchLogIn({ email, password }))
            if(rememberMe) {
                cookies.set('email', email, {
                    secure: true,
                    sameSite:"strict",
                    expires: 7
                })
                cookies.set('password', password, {
                    secure: true,
                    sameSite:"strict",
                    expires: 7
                })
            } else {
                cookies.remove('email')
                cookies.remove('password')
            }
        } catch (error) {
            console.error("Erreur de connexion :", error);
        }
    }

    useEffect(() => {
        const savedEmail = cookies.get('email');
        const savedPassword = cookies.get('password');
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    useEffect(() => {
        if(isConnected) {
            navigate("/User")
        }
    },[isConnected, navigate])

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.top}>
                    <i className={userClassLogo}></i>
                    <h1 className={styles.title}>
                        Sign In
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <label 
                        htmlFor="username"
                        className={styles.label}
                    >
                        Username
                    </label>
                    <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                    <label 
                        htmlFor="password"
                        className={styles.label}
                    >
                        Password
                    </label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                    <div className={styles.row}>
                    <label 
                        htmlFor="rememberMe"
                        className={styles.label}
                    >
                        Remember Me
                    </label>
                    <input 
                        type="checkbox" 
                        className={styles.inputRemember}
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    </div>
                    <button
                        type="submit"
                        className={styles.button}
                    >
                        SignIn
                    </button>
                </form>
            </div>
        </div>  
    )
}

export default FormConnect;