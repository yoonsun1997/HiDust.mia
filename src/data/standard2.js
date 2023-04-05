import React from "react";
import D2Good from './standard/D2_Good'
import D2Nomal from './standard/D2_nomal'
import D2Bad from './standard/D2_Bad'
import D2SoBad from './standard/D2_SoBad'
import D2None from "./standard/D2_None";

const Standard2 = ({area}) => {
    const state = area.areaData.pm25Grade1h || 5; //1:좋음, 2:보통, 3:나쁨, 4:매우나쁨, 5:초기화면
    
    return(
        <>
            {
                {
                    1: <D2Good area={area} />,
                    2: <D2Nomal area={area} />,
                    3: <D2Bad area={area} />,
                    4: <D2SoBad area={area} />,
                    5: <D2None />
                }[state]
            }
        </>
    )
}

export default Standard2;

