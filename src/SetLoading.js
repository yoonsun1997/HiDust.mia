import React, {useState, useEffect} from "react";
import Loading from "./Loading";

const RunLoading = () => {

    const (loading,setLoading) = useState(true);

    const mainApi = async () =>{
            setLoading(true);
        try{
            const response = await fetch ('api url',{
                method:'POST',
                headers: {
                    Accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(),
            });

            const result = await response.json();
            console.log('mainData'.result);
            setLoading(false);
            } catch (error) {
            window.alert(error);
        }
    };
        useEffect (() => {
                mainApi();
        },[]);

        return(
            <>
            {loding ? <Loading /> : null} 
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
            <div className='gnb-wrap'>
            <nav className={`${styles.gndNav}`} >
            <NavLink to="/dust1" className={`${styles.a}`}>미세먼지</NavLink>
            <NavLink to="/dust2" className={`${styles.a}`}>초미세먼지</NavLink>
            <NavLink to="/*" className={`${styles.a}`}>오존</NavLink>
            </nav>
            <Routes>
            <Route path="/dust1" element={<Dust1/>} className={`${styles.a}`}></Route>
            <Route path="/dust2" element={<Dust2/>} className={`${styles.a}`}></Route>
            <Route path="*" element={<NotFound />} className={`${styles.a}`}></Route>
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

