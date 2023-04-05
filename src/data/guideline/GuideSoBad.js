import React from "react";
import styles from './GuideSoBad.module.css';
import {ReactComponent as Cloudy} from "./cloudy.svg";



const GuideSoBad = () =>{
    return(
        <>
            <div className={`${styles.Guide}`}>
                <h1 className={`${styles.GuideTitle}`}>미세먼지 행동요령</h1>
                <h1>현재 대기질 : <span>매우 나쁨</span></h1>
                <h1>가급적 실외활동을 자제합니다.</h1>
                <div className={`${styles.GuideStandrad}`}>
                    <h1>외출시 보건용 마스크(KF80, KF94) 착용하기.</h1>
                    <h1>외출 후 깨끗이 씻고 충분한 물 섭취하기.</h1>
                    <h1>가급적 대중교통 이용하기.</h1>
                </div>
            </div>
            <Cloudy className={`${styles.Cloudy}`} />
        </>
    )
}

export default GuideSoBad;