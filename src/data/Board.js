import React from "react";
import styles from './Board.module.css'
import { ReactComponent as Em } from './em.svg';
import Time from './../tools/Time';

const Board = ({notice}) => {

    // const [news,setUpdata] = useState(notice.today.informCause)

    const preventAnchor = (evt) => {
        evt.preventDefault();
    }

    return(
        <>
            <div className={`${styles.section}`}>
                <h1 className={`${styles.title}`}>대기정보 예보/경보</h1>
                <div className={`${styles.timer}`}>{<Time/>} 발표자료</div>
            </div>
            <div className={`${styles.List}`}>
                <Em />
                <div className={`${styles.over}`}>
                    <ul>
                        <li className={`${styles.text}`}><em className={`${styles.day1}`}>오늘</em><span className={`${styles.news}`}>{notice.today.informCause}</span></li>
                        <li className={`${styles.text}`}><em className={`${styles.day1}`}>오늘</em><span className={`${styles.news}`}>{notice.today.informOverall}</span></li>
                        <li className={`${styles.text}`}><em className={`${styles.day2}`}>내일</em><span className={`${styles.news}`}>{notice.tomorrow.informCause}</span></li>
                        <li className={`${styles.text}`}><em className={`${styles.day2}`}>내일</em><span className={`${styles.news}`}>{notice.tomorrow.informOverall}</span></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Board;
