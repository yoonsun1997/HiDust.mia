import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import styles from './Loading.module.css';


const Loading = () => {
    return(
        <>
            <div className={`${styles.viewport}`}>
            <FontAwesomeIcon icon={ faCloud } className={`${styles.cloud}`} />
            <h1 className={`${styles.LoadingText}`}>Loading...</h1>
            </div>
        </>
    );
};

export default Loading;