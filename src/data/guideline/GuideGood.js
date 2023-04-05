import React from "react";
import styles from './GuideGood.module.css';
import {ReactComponent as Forest}  from '../guideline/forest.svg';

const GuideGood = () =>{
    return(
        <>
            <div className={`${styles.Guide}`}>
                <h1 className={`${styles.GuideTitle}`}>미세먼지 행동요령</h1>
                <h1 className={`${styles.GuideDetail}`}>현재 대기 상태 : <span className={`${styles.GuideSpan}`}>좋음</span></h1>
                <h1 className={`${styles.GuideLast}`}>다양하고 충분한 실외활동을 즐겨보세요!</h1>
            </div>
            <Forest className={`${styles.Forest}`}/>
        </>
    )
}

export default GuideGood;