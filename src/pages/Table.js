import  React from 'react';
import styles from './Table.module.css';
import Dust1 from './img/pm10.png';
import Dust2 from './img/pm25.png';


const Table = () =>{
    
    
    return(
        <>
            <div className={`${styles.section}`}>
                <h1 className={`${styles.title}`}>대기정보 예보기준</h1>
                <div className={`${styles.sud}`}>
                    <div className={`${styles.section1}`}>
                        <h2 className={`${styles.subTitle}`}>• 미세먼지(PM-10)</h2>
                        <img src={Dust1} alt='imgDust01' className={`${styles.img001}`}/>
                        <h2 className={`${styles.subTitle}`}>• 초미세먼지(PM-2.5)</h2>
                        <img src={Dust2} alt='imgDust02' className={`${styles.img002}`}/>
                        <p className={`${styles.ps}`}>※ 민감군 : 영·유아, 어린이, 임신부, 어르신, 호흡기·심혈관 질환자 등 대기오염에 노출되었을 경우 건강 등에 영향을 받기 쉬운 사람</p>
                    </div>
                </div>
            </div>
        </>    
    );  
};

export default Table;