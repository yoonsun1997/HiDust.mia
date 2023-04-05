import styles from './App.module.css';
import './Reset.module.css';
import {Routes, Route, NavLink} from "react-router-dom";
import Dust1 from './pages/Dust1';
import Dust2 from './pages/Dust2';
import Timezone from './tools/Timezone';
import Table from './pages/Table';
import QnA from './pages/QnA';
import Why from './pages/why';
import Do from './pages/Do';
import Footer from './pages/Footer';

function App() {
        return(
            <>
            <div>
                <div className={`${styles.App}`}>
                    <header id='header'>
                        <div className={`${styles.nav}`}>
                        <div className={`${styles.navWarp}`}>
                            <div className={`${styles.logo}`}>
                                <span className={`${styles.cloud}`}>☁</span>
                                <h1 className={`${styles.Title}`} >Hi Dust</h1>
                            </div>
                        <div className={`${styles.util}`} >
                        <Timezone />
                    </div>
                </div>
            </div>
            <div className={`${styles.gnbWrap}`}>
                <nav className={`${styles.gndNav}`} >
                    <NavLink to="/dust1" className={`${styles.a}`}>시도별 미세먼지 대기정보</NavLink>
                    <NavLink to="/dust2" className={`${styles.a}`}>시도별 초미세먼지 대기정보</NavLink>
                    <NavLink to="/QnA" className={`${styles.QnA}`}>미세먼지와 초미세먼지</NavLink>
                    <NavLink to="/Why" className={`${styles.Why}`}>미세먼지가 위험한 이유</NavLink>
                    <NavLink to="/Do" className={`${styles.Do}`}>고농도미세먼지 행동요령</NavLink>
                    <NavLink to="/Table" className={`${styles.Table}`}>대기정보 예보기준</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Dust1/>} className={`${styles.a}`}></Route>
                    <Route path="/dust1" element={<Dust1/>} className={`${styles.a}`}></Route>
                    <Route path="/dust2" element={<Dust2/>} className={`${styles.a}`}></Route>
                    <Route path="/QnA" element={<QnA/>} className={`${styles.a}`}></Route>
                    <Route path="/Why" element={<Why/>} className={`${styles.a}`}></Route>
                    <Route path="/Do" element={<Do/>} className={`${styles.a}`}></Route>
                    <Route path="/Table" element={<Table/>} className={`${styles.a}`}></Route>
                </Routes>
            </div>
        </header>
        <footer id='footer'>
            <Footer />
        </footer>
        </div>
            </div>
            </>
        );
};

export default App;
