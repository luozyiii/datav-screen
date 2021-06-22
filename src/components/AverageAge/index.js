import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

import './index.less';

export default function (props) {
  const [startAge, setStartAge] = useState(0);
  const { avgAge = 18 } = props;

  useEffect(() => {}, []);

  return (
    <div className="average-age">
      <div className="title-wrapper">
        <div className="left">
          <div className="title">慕课外卖用户年龄分布&平均年龄</div>
          <div className="sub-title">Distribution of Age</div>
        </div>
        <div className="right">
          <div className="age">
            <CountUp
              start={startAge}
              end={avgAge}
              duration={1000}
              decimals={2}
            />
            <span className="age-unit">岁</span>
          </div>
        </div>
      </div>
      <div id="average-age-chart" />
      <div className="average-data-wrapper">
        {/* <div className="average-data" v-for="(item, index) in data" :key="index">
        <div className="average-data-value">
          <count-to
            :startVal="item.startValue"
            :endVal="item.value"
            :duration="1000"
          />
        </div>
        <div className="average-data-axis">
          <div className="point" style={{background: 'red'}} />
          <div className="text">xxx</div>
        </div>
      </div> */}
      </div>
    </div>
  );
}
