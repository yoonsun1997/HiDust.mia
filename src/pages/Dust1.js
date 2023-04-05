import React , {useState} from "react";
import styles from './Dust1.module.css';
import '../App.module.css';
import Standard1 from "../data/standard1";
import Guide1 from "../data/guideline/guideline1";
import Board from "../data/Board";
import '../data/Republic_Korea.css';
import Korea from '../data/Koreamap';
import TimeSection from './TimeSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from '@fortawesome/free-solid-svg-icons';

const Dust1 = () => {
    const [area, setArea] = useState({
        areaName : "서울",
        areaData : {}
    });

    const [notice, setNotice] = useState({
        today : {},
        tomorrow : {}
    });

    const mutateArea = (area, areaData) => {
        console.log(areaData)
        setArea({areaName : area, areaData : areaData});
    }

    const mutateNotice = (today, tomorrow) => {
        setNotice({today : today, tomorrow : tomorrow});
    }

    // const [news, setUpDate] = useState(null);

    return (
    <>
        <main id="main">
            <div className={`${styles.dustSection}`}>
                <div className={`${styles.mainLeft}`}>
                    <div className={`${styles.dustMap}`}>
                        <span className={`${styles.upTitle}`}>
                        <FontAwesomeIcon icon={faSmog} /> 미세먼지 PM10 (㎍/㎥)
                        </span>
                        <Korea className={`${styles.svg}`} mutateArea={mutateArea} area={area} notice={notice} mutateNotice={mutateNotice}/>
                    </div>
                </div>
                <div className={`${styles.mainRight}`}>
                    <div className={`${styles.setTime}`}><TimeSection area={area}/></div>
                    <div className={`${styles.dustState}`}><Standard1 area={area}/></div>
                    <div className={`${styles.dustStandard}`}><Guide1 area={area}/></div>
                    <div className={`${styles.dustBoard}`}><Board notice={notice} /></div>
                </div>
            </div>
        </main>
    </>
    )
}

export default Dust1;