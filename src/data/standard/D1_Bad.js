import React from "react";
import styles from './Bad.module.css';
import {ReactComponent as Bad}  from '../standard/Bad.svg';

const D1Bad = ({area}) => {
    /*pm10Value = 미세먼지농도, no2Value = 이산화질소, coValue = 일산화탄소,
    o3Value = 오존농도 so2Value 아황산가스 농도 */
    console.log(area)
    return(
        <>
            <div className={`${styles.DustStateSection}`}>
                <h1 className={`${styles.Title}`}> '{area.areaName || '지역을 선택해주세요!'}' 의 대기정보</h1>
                <div className={`${styles.DustStateSectionTitle}`}>
                <h1><Bad />
                    <br/>
                    <span className={`${styles.State}`}>나쁨</span>
                </h1>
                    <h1 className={`${styles.h2}`}>미세먼지<br />(PM-10)</h1>
                    <h1 className={`${styles.BadAmount}`}>{area.areaData.pm10Value ||'---'}㎍/㎥</h1>
                </div>
                <div className={`${styles.SubTitle}`}>
                    <div>
                        <h2 className={`${styles.h2}`}>이산화질소(NO₂)</h2>
                        <h2 className={`${styles.last}`}>{area.areaData.no2Value ||'---'}㎍/㎥</h2>
                    </div>
                    <div>
                        <h2 className={`${styles.h2}`}>일산화탄소(CO)</h2>
                        <h2 className={`${styles.last}`}>{area.areaData.coValue ||'---'}ppm</h2>
                    </div>
                    <div>
                        <h2 className={`${styles.h2}`}>오존(O₃)</h2>
                        <h2 className={`${styles.last}`}>{area.areaData.o3Value ||'---'}ppm</h2>
                    </div>
                    <div>
                        <h2 className={`${styles.h2}`}>아황산가스(SO₂)</h2>
                        <h2 className={`${styles.last}`}>{area.areaData.so2Value ||'---'}ppm</h2>
                    </div>
                </div>
                <span className={`${styles.warning}`}>* 해당 측정값은 해당 시도별의 정해진 <span className={`${styles.ev}`}>측정소</span>의 측정값을 의미하며,
                <br />실제 측정값과 다를 수 있습니다.</span>
            </div>
        </>
    )
}

export default D1Bad;