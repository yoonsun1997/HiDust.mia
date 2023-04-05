import React, { useState } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {

    const [Email, setEmail] = useState("");
    const [PassWord, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div className={`${styles.all}`}>
            <div className={`${styles.left}`}>
                <div className={`${styles.BGback}`}>
                    <video className={`${styles.video}`} autoPlay muted loop>
                        <source src ={require("./back.mp4")} type="video/mp4" />
                        Your browser is not supported!
                    </video>
                </div>
            </div>
            <div className={`${styles.back}`}>
                <div className={`${styles.layout}`}>
                    <div className={`${styles.from}`}>
                        <h1>a</h1>
                        <label className={`${styles.title}`}>ID</label>
                        <input type={"email"} value={Email} onChange={onEmailHandler}></input>
                        <br/>
                        <label className={`${styles.title}`}>PW</label>
                        <input type={"password"} value={PassWord} onChange={onPasswordHandler}></input>
                        <br/>
                        <button className={`${styles.btn}`} formAction=''>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;