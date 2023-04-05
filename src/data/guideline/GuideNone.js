import React from "react";
import styles from './GuideNone.module.css';
import {ReactComponent as Noneimg}  from '../guideline/Noneimg.svg';

const GuideNone = () =>{
    return(
        <>
            <div className={`${styles.Guide}`}>
                <h1 className={`${styles.GuideTitle}`}>미세먼지 행동요령</h1>
                <h1 className={`${styles.GuideDetail}`}>현재 대기 상태 : <span className={`${styles.GuideSpan}`}> ---</span></h1>
                <h1 className={`${styles.GuideLast}`}>
                    지역을 선택 후 <br />
                    대기상태와 행동요령을 알아보세요!
                </h1>
            </div>
            <Noneimg className={`${styles.lastImg}`}/>
        </>
    )
}

export default GuideNone;