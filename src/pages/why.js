import  React  from 'react';
import styles from './Why.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import Lung from './img/lung.png';
import Sick from './img/Sick.png';
import eye from './img/eye.png';

const Why = () =>{
    return(
        <>
            <div className={`${styles.section}`}>
                <div className={`${styles.left}`}>
                    <h1 className={`${styles.title}`} >
                    <FontAwesomeIcon icon={ faUserDoctor } className={`${styles.Doctor}`} />
                        미세먼지와 초미세먼지가 위험한 이유?</h1>
                    <hr />
                    <h1 className={`${styles.h1}`} >- 미세먼지와 초미세먼지가 위험한 이유</h1>
                    <p className={`${styles.p}`}>미세먼지와 초미세먼지는 지름이 10㎛ 이하의 크기로 우리눈에 보이지 않을 정도로 가늘고 작습니다. <br />
                        작은 먼지 입자가 사람의 페포까지 깊숙하게 침투하여 각종호흡기질환의 원인이 될 수 있습니다.</p>
                    <br />
                    <h1 className={`${styles.h1}`} >- 미세먼지 우리몸에 얼마나 해로울까요?</h1>
                    <p className={`${styles.p}`}>미세먼지가 문제가 되는 것은 여기에 포함된 각종 중금속과 오염물질 때문입니다.<br />
                        특히 미세먼지는 10㎛(마이크로미터, 1㎛=1000분의 1㎜)이하, 초미세먼지는 2.5㎛(마이크로미터, 1㎛=1000<br />
                        분의 1㎜) 이하로 우리 눈에 보이지 않을 정도로 작기 때문에 호흡기 깊은 곳까지 침투해 각종 호흡기 질환,<br /> 
                        심장질환, 혈액과 폐의 염증 반응을 불러일으키고, 피부 트러블의 원인이 되기도 하고 눈병과 알레르기를 악화<br />
                        시킬 수 있습니다. 그 크기가 미세하여 한번 몸에 들어오면 좀처럼 몸에서 빠져나가지 않기 때문에 더욱 주의를<br />
                        요하는 것입니다.</p>
                </div>
                <div className={`${styles.right}`}>
                    <div>
                    <img src={Lung} alt='DustImg04' className={`${styles.img04}`} />
                    <img src={Sick} alt='DustImg05' className={`${styles.img05}`} />
                    <img src={eye} alt='DustImg06' className={`${styles.img06}`} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Why;