import  React from 'react';
import styles from './Do.module.css';
import men from './img/men.png';
import women from './img/women.png';

const Do = () => {
    return(
        <>
            <div className={`${styles.section}`}>
                <h1 className={`${styles.title}`}>고농도 미세먼지 시민행동요령 (7대)</h1>
                <div className={`${styles.sub1}`}>
                    <h2 className={`${styles.h2}`}>1. 외출은 가급적 자제하기</h2>
                    <p>실외모임, 캠프, 스포츠 등 실외활동 최소화하기</p>
                    <h2 className={`${styles.h2}`}>2. 외출시 몸 상태에 따라 보건용 마스크(식약처 인증) 착용하기</h2>
                    <p>마스크 착용시 공기누설을 체크하며 안면에 마스크를 밀착해 착용하기</p>
                    <p className={`${styles.min}`}>• 주의사항 : 임산부, 호흡기·심혈관 질환자, 어린이, 노약자 등 마스크 착용으로</p>
                    <p className={`${styles.min}`}>호흡이 불편한 경우 사용을 중지하고, 필요시 의사 등 전문가와 상의</p>
                    <h2 className={`${styles.h2}`}>3. 외출시 대기오염이 심한 곳은 피하고, 활동량 줄이기</h2>
                    <p>미세먼지 농도가 높은 도로변, 공사장 등에서 지체시간 줄이기</p>
                    <p>호흡량 증가로 미세먼지 흡입이 우려되는 격렬한 외부활동 줄이기</p>
                    <p className={`${styles.min}`}>※ 참고 : 연구결과(Science Daily, 2016)에 따르면, 대기오염물질 흡입을 최소화하기 위해</p>
                    <p className={`${styles.min}`}>보행시 2∼6 km/hr, 자전거 운행시 12∼20 km/hr  (성인기준) 속도 유지</p>
                    <h2 className={`${styles.h2}`}>4. 외출 후 깨끗이 씻기</h2>
                    <p>샤워하고, 특히 필수적으로 손·발·눈·코를 흐르는 물에 씻고 양치질하기</p>
                    <h2 className={`${styles.h2}`}>5. 물과 비타민C가 풍부한 과일·야채 섭취하기</h2>
                    <p className={`${styles.aaa}`}>노폐물 배출 효과가 있는 물, 항산화 효과가 있는 과일·야채 등 충분히 섭취하기</p>
                    <h2 className={`${styles.h2}`}>6. 환기, 물청소 등 실내 공기질 관리하기</h2>
                    <p>실내·외 공기 오염도를 고려하여 적절한 환기 실시하기</p>
                    <p>실내 물걸레질 등 물청소 실시, 공기청정기 가동하기(공기청정기 필터 주기적 점검‧교체)</p>
                    <p className={`${styles.min2}`}>[환기요령]</p>
                    <p className={`${styles.min2}`}>• 실내오염도가 높을 때는 자연환기 또는 기계환기 실시</p>
                    <p className={`${styles.min2}`}>단, 외부 미세먼지 ‘나쁨’ 이상시 자연환기를 자제하되, 실내공기질 오염상황에 따라 필요한 경우</p>
                    <p className={`${styles.min2}`}>짧게 환기 후 물청소</p>
                    <p className={`${styles.min2}`}>• 대기가 정체되어 있는 시간대를 피해 오전 10시부터 오후 9시 사이에 하루 3번 30분 환기</p>
                    <p className={`${styles.min2}`}>• 자연환기 시에는 대기오염도가 높은 도로변 외의 다른 창문을 통한 환기 실시</p>
                    <p className={`${styles.min2}`}>• 조리시 주방후드 가동과 자연환기를 동시에 실시하고, 조리 후에도 30분 환기</p>
                    <p className={`${styles.min2}`}>※ 참고 : 주택 실내공기질 관리를 위한 매뉴얼</p>
                    <p className={`${styles.min3}`}>(환경부·국립환경과학원, 2012), 주거환경 중 주방에서 발생되는 실내 오염물질 관리방안 연구(국립환경과학원, 2013)</p>
                    <h2 className={`${styles.h2}`}>7. 대기오염 유발행위 자제하기</h2>
                    <p>자가용 운전 대신 대중교통 이용, 폐기물 태우는 행위 등 자제하기</p>
                </div>
            </div>
            <img src={men} alt='img07' className={`${styles.img07}`} />
            <img src={women} alt='img08' className={`${styles.img08}`} />
        </>
    );
};


export default Do;