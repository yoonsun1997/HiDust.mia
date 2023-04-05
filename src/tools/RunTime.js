import { useState, useEffect } from "react";

const RunTime = () => {
    
    const [time, setTime] = useState(new Date());
    
        useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        return (() => clearInterval(timer))
        }, []); //정리
                
        return (
        <div>
            <span>{time.toLocaleTimeString()}</span>
        </div>
        );
    };

    export default RunTime;