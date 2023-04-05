import React from "react";


const Time = () => {
    const nowTime = () => {
        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth() + 1;
        let nowDay = now.getDate();
        let hours = now.getHours();

        return nowYear + '년 ' + nowMonth + '월 ' + nowDay + '일 ' + hours + '시'
    }

    return (
        <>{nowTime()}</>
    );
};

export default Time;