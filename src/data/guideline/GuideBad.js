import React from "react";
import styles from './GuideBad.module.css';
import {ReactComponent as Fogi} from './fogi.svg';

const GuideBad = () =>{
    return(
        <>
            <div className={`${styles.Guide}`}>
                <h1 className={`${styles.GuideTitle}`}>미세먼지 행동요령</h1>
                <h1 className={`${styles.GuideDetail}`}>현재 대기 상태 : <span className={`${styles.stat1234}`} >나쁨</span></h1>
                <h1 className={`${styles.GuideDetailTitle}`}>장시간 또는 무리한 실외활동을 제한합니다.</h1>
                <div className={`${styles.GuideStandard}`}>
                <h1>- 외출시 보건용 마스크 KF80, KF94 착용하기.</h1>
                <h1>- 외출 후 깨끗이 씻고 충분한 물 섭취하기.</h1>
                <h1>- 가급적 대중교통 이용하기.</h1>
                </div>
            </div>
            <Fogi className={`${styles.Fogi}`} />
        </>
    )
}

export default GuideBad;