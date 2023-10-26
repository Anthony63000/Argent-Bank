
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FeatureAccount from "./FeatureAccount";
import { useSelector } from "react-redux"; 
import styles from "./userAccount.module.scss";
import { updateUserName } from "../../Redux/UpdateNameSlice"



function UserAccount() {

    const [formIsVisible, setFormIsVisible] = useState(false);

    const toogleVisibility = () => {
        setFormIsVisible(!formIsVisible)
    }

    const userProfile = useSelector((state) => state.userProfile?.userProfile)

    const [userName, setUserName] = useState(userProfile?.userName || "");
    const [formIsValide, setFormIsValide] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            dispatch(updateUserName({ userName }))
            setUserName("")
            setFormIsValide(true)
        } catch (error) {
            console.error("Erreur de connexion :", error);
        }
    }

    useEffect(() => {
        if (formIsValide) {
            setFormIsVisible(false);
        }
    }, [formIsValide]);

    return (
        <div className={styles.container}>
            {!formIsVisible && (
            <div className={styles.top}>
                <h1 className={styles.title}>
                    Welcome Back
                    <br />
                    {userProfile?.userName}
                </h1>
                <button 
                    className={styles.buttonTop}
                    onClick={toogleVisibility}
                >
                        Edit Name
                </button>
            </div>)}
            {formIsVisible && (
                <div className={styles.topForm}>
                    <h1 className={styles.titleForm}>
                        Edit user info
                    </h1>
                    <form 
                        onSubmit={handleSubmit}
                        className={styles.form}
                    >
                        <div className={styles.formRow}>
                            <label htmlFor="Username">
                                User name:
                            </label>
                            <input 
                                type="text"
                                onChange={(e) => setUserName(e.target.value)} 
                                value={userName}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="First name">
                                First Name:
                            </label>
                            <input type="text" 
                                className={styles.shadow}
                                readOnly
                                value={userProfile?.firstName}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="Last name"
                            >
                                Last Name:
                            </label>
                            <input type="text" 
                            className={styles.shadow}
                                readOnly
                                value={userProfile?.lastName}
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button
                                type="submit"
                                className={styles.button}
                            >
                                Save
                            </button>
                            <button
                                className={styles.button}
                                onClick={toogleVisibility}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className={styles.bottom}>
                <FeatureAccount 
                accountTitle="Argent Bank Checking (x8349)"
                accountAmount="$2,082.79"
                amountDescription="Available Balance"
                />
                <FeatureAccount 
                accountTitle="Argent Bank Savings (x6712)"
                accountAmount="$10,928.42"
                amountDescription="Available Balance"
                />
                <FeatureAccount 
                accountTitle="Argent Bank Credit Card (x8349)"
                accountAmount="$184.30"
                amountDescription="Current Balance"
                />
            </div>
        </div>
    )
}

export default UserAccount;