import React from "react";
import GuideGood from "./GuideGood";
import GuideNomal from "./GuideNomal";
import GuideBad from "./GuideBad";
import GuideSoBad from "./GuideSoBad";
import GuideNone from "./GuideNone";

const Guide2 = ({area}) => {
    const state = area.areaData.pm25Grade1h || 5; //1:좋음, 2:보통, 3:나쁨, 4:매우나쁨, 5:초기화면

    return(
        <>
        {
            {
                1: <GuideGood area={area} />,
                2: <GuideNomal area={area} />,
                3: <GuideBad area={area} />,
                4: <GuideSoBad area={area} />,
                5: <GuideNone />
            }[state]
        }
        </>
    )
}

export default Guide2;
