import React from "react";
import Time from "../tools/Time";
import styles from './TimeSection.module.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TimeSection = ({area}) => {
    return(
        <>
            <div className={`${styles.time}`}>
                <h1 className={`${styles.titie}`}>
                    <FontAwesomeIcon icon={faLocationDot} className={`${styles.Dot}`} /> 
                    &nbsp;측정소명 : { area.areaData.stationName || '점검중...'}
                </h1>
                <h1 className={`${styles.titie}`}>
                    <FontAwesomeIcon icon={faClock} className={`${styles.Clock}`} />
                    &nbsp;측정시간 : {<Time /> || '점검중...'}
                </h1>
            </div>
        </>
    );
};

export default TimeSection;