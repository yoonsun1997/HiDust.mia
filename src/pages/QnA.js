import React from "react";
import styles from "./QnA.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import man from './img/Mask.png';
import Factory from './img/Factory.svg';
import Car from './img/car.svg';

const QnA = () => {

    return(
        <>
        <div className={`${styles.section}`}>
            <div className={`${styles.left}`}>
                <h1 className={`${styles.title}`}>
                    <FontAwesomeIcon icon={ faThumbtack } className={`${styles.Dot}`} />
                    미세먼지와 초미세먼지란?
                </h1>
                <hr />
                    <h1 className={`${styles.h1}`}>- 미세먼지(PM-10)</h1>
                    <div className={`${styles.d1}`}>
                        <p className={`${styles.p}`}>미세먼지는 직경이 10㎛이하인 먼지입니다.<br />
                        일반적으로 사람 머리카락 두께와 비교할 때 미세먼지(PM-10)는 1/6∼1/7일 정도로 매우 작습니다.<br />
                        미세먼지는 주로 산업시설, 자동차, 난방 및 에너지 사용 등으로 인해 직접적으로 1차 배출되기도 하고,<br />
                        황산염, 질산염과 같이 대기 중 반응에 의해 2차 생성되기도 합니다. 주요 구성성분은 이온성분(SO42+, NO32-, NH4+),<br /> 
                        탄소성분(유기탄소, 원소탄소), 금속화합물 등입니다. 미세먼지를 흡입했을 때 기도에서 걸러지지 못하고 대부분 폐포까지<br /> 
                        침투하여 심장질환과 호흡기질환을 유발하여 조기 사망률을 증가시키며, 시정을 악화시키고, 식물의 잎 표면에 침적되어<br /> 
                        신진대사를 방해하며, 건축물에 퇴적되어 부식을 일으킵니다.</p>
                    </div>
                <br />
                <h1 className={`${styles.h1}`}>- 초미세먼지(PM-2.5)</h1>
                <div className={`${styles.d2}`}>
                <p className={`${styles.p}`}>미세먼지는 직경이 2.5㎛이하인 먼지입니다.<br />
                        일반적으로 사람 머리카락 두께와 비교할 때 초미세먼지(PM-10)는 1/20∼1/30일 정도로 매우 작습니다.<br />
                        초미세먼지는 주로 산업시설, 자동차, 난방 및 에너지 사용 등으로 인해 직접적으로 1차 배출되기도 하고,<br />
                        황산염, 질산염과 같이 대기 중 반응에 의해 2차 생성되기도 합니다. 주요 구성성분은 이온성분(SO42+, NO32-, NH4+),<br /> 
                        탄소성분(유기탄소, 원소탄소), 금속화합물 등입니다. 초미세먼지를 흡입했을 때 기도에서 걸러지지 못하고 대부분 폐포까지<br /> 
                        침투하여 심장질환과 호흡기질환을 유발하여 조기 사망률을 증가시키며, 시정을 악화시키고, 식물의 잎 표면에 침적되어<br /> 
                        신진대사를 방해하며, 건축물에 퇴적되어 부식을 일으킵니다.</p>
                </div>
            </div>
                <div className={`${styles.right}`}>
                    <img src={man} alt='DustImg01' className={`${styles.img01}`} />
                    <img src={Factory} alt='DustImg02' className={`${styles.img02}`} />
                    <img src={Car} alt='DustImg03' className={`${styles.img03}`} />
                </div>
            </div>    
        </>
    )
}

export default QnA;