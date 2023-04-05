import React from "react";
import styles from './None.module.css';
import {ReactComponent as None}  from '../standard/none.svg';

const D1None = ({area}) => {
    return(
        <>
            <div className={`${styles.DustStateSection}`}>
                <h1 className={`${styles.Title}`}>지역을 선택해주세요!</h1>
                <div className={`${styles.DustStateSectionTitle1}`}>
                    <h1><None />
                        <br/>
                        <span className={`${styles.State}`}></span>
                    </h1>
                    <h1 className={`${styles.h2}`}>미세먼지<br />(PM-10)</h1>
                    <h1 className={`${styles.BadAmount}`}>---㎍/㎥</h1>
                </div>
                <div className={`${styles.SubTitle}`}>
                    <div>
                        <h2 className={`${styles.h2}`}>이산화질소(NO₂)</h2>
                        <h2 className={`${styles.last}`}>---㎍/㎥</h2>
                    </div>
                    <div>
                        <h2 className={`${styles.h2}`}>일산화탄소(CO)</h2>
                        <h2 className={`${styles.last}`}>---ppm</h2>
                    </div>
                    <div>
                        <h2 className={`${styles.h2}`}>오존(O₃)</h2>
                        <h2 className={`${styles.last}`}>---ppm</h2>
                    </div>
                    <div>
                        <h2 className={`${styles.h2}`}>아황산가스(SO₂)</h2>
                        <h2 className={`${styles.last}`}>---ppm</h2>
                    </div>
                </div>
                <span className={`${styles.warning}`}>* 해당 측정값은 해당 시도별의 정해진 <span className={`${styles.ev}`}>측정소</span>의 측정값을 의미하며,
                <br />실제 측정값과 다를 수 있습니다.</span>
            </div>
        </>
    )
}

export default D1None;