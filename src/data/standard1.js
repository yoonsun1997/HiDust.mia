import React from "react";
import D1Good from './standard/D1_Good'
import D1Nomal from './standard/D1_nomal'
import D1Bad from './standard/D1_Bad'
import D1SoBad from './standard/D1_SoBad'
import D1None from "./standard/D1_None";

const Standard1 = ({area}) => {
    const state = area.areaData.pm10Grade1h || 5; //1:좋음, 2:보통, 3:나쁨, 4:매우나쁨, 5:초기화면
    
    return(
        <>
            {
                {  
                    1: <D1Good area={area} />,
                    2: <D1Nomal area={area} />,
                    3: <D1Bad area={area} />,
                    4: <D1SoBad area={area} />,
                    5: <D1None />
                }[state]
            }
        </>
    )
}

export default Standard1;


