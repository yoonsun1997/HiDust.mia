import React  from 'react';
import Clock from 'react-live-clock';

const Timezone = () =>{
    
    return (
        <div>
            <Clock 
            format={'YYYY년 MM월 DD일 HH:mm:ss A'} ticking={true} timezone={'Asia/Seoul'} />
        </div>
    );
};

export default Timezone;