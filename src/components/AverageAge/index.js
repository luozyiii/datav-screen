import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AverageAgeChart from './components/AverageAgeChart';

import './index.less';

export default function (props) {
  const [startAge, setStartAge] = useState(0);
  const { avgAge = 18 } = props;

  const averageData = [
    {
      startValue: 131120,
      value: 131127,
      axis: '0-20',
      color: 'rgb(116,116,49)',
    },
    {
      startValue: 330840,
      value: 330848,
      axis: '20-30',
      color: 'rgb(190,245,99)',
    },
    {
      startValue: 551300,
      value: 551305,
      axis: '30-50',
      color: 'rgb(202,252,137)',
    },
    { startValue: 31140, value: 31152, axis: '>50', color: 'rgb(251,253,142)' },
  ];

  useEffect(() => {}, []);

  return (
    <div className="average-age">
      <div className="title-wrapper">
        <div className="left">
          <div className="title">外卖用户年龄分布&平均年龄</div>
          <div className="sub-title">Distribution of Age</div>
        </div>
        <div className="right">
          <div className="age">
            <CountUp
              start={startAge}
              end={avgAge}
              duration={100}
              decimals={2}
            />
            <span className="age-unit">岁</span>
          </div>
        </div>
      </div>
      {/* 图表 */}
      <div className="average-age-chart">
        <AverageAgeChart chartData={averageData} />
      </div>
      <div className="average-data-wrapper">
        {averageData.map((item, index) => (
          <div className="average-data" key={index}>
            <div className="average-data-value">
              <CountUp
                start={item.startValue}
                end={item.value}
                duration={100}
              />
            </div>
            <div className="average-data-axis">
              <div className="point" style={{ background: `${item.color}` }} />
              <div className="text">{item.axis}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
