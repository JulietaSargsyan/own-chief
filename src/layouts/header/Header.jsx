import React from 'react';
import styles from './header.module.css';


export default function Header() {
    return(
        <header className= {styles.header}>
            <div className = {styles.logo}>
                <img src={'img/logo.png'} />
            </div>
            <div className={styles.sign}>
                <div className={styles.signIn}>
                    <p>sign in</p>
                </div>
                <div className={styles.signUp}>
                     <p>sign up</p>
                </div>
            </div>
        </header>
    );
}