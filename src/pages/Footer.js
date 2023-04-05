import React from "react";
import '../App.module.css';
import styles from './Footer.module.css';
import CC from './img/cc.png';
import Nd from './img/nd.png';

const Footer = () =>{

    return (
        <>  
            <div className={`${styles.LastSection}`}>
                <div className={`${styles.footer}`}>
                    <h1 className={`${styles.copy2}`}> - 자료출처: 환경부, 한국환경공단</h1>
                    <h1 className={`${styles.copy2}`}>* 해당 데이터는 인증을 받지 않은 실시간자료 이므로 자료 오류 및 표출방식에 따라 값이 다를 수 있습니다.</h1>
                </div>
                <div>
                <h1 className={`${styles.copy}`}>Copyright 2023 © Mia.K All right reserved.</h1>
                </div>
                <div className={`${styles.SubFooter}`}>
                    <img src={CC} alt='img10' styles={`${styles.img10}`} />
                    <img src={Nd} alt='img11' styles={`${styles.img11}`}/>
                </div>
            </div>
        </>
    );
};

export default Footer;