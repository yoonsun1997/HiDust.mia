import React from "react";
import styles from './GuideNomal.module.css';
import {ReactComponent as Forest2}  from '../guideline/forest2.svg';

const GuideNomal = () =>{
    return(
        <>
            <div className={`${styles.Guide}`}>
                <h1 className={`${styles.GuideTitle}`}>미세먼지 행동요령</h1>
                <h1  className={`${styles.GuideDetail}`}>현재 대기 상태 : <span className={`${styles.stat1234}`}>보통</span></h1>
                <h1 className={`${styles.GuideDetailTitle}`}>야외활동에 제약이 없습니다!</h1>
                <div className={`${styles.GuideStandard}`}>
                    <h1  className={`${styles.tt}`}>민감군 몸의 상태에 따라 유의하여 활동해주세요!</h1>
                    <br/>
                    <h1>*민감군: 노약자, 어린이, 임산부, 호흡기질환자</h1>
                </div>
            </div>
            <Forest2 className={`${styles.Forest2}`} />
        </>
    )
}

export default GuideNomal;