import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [startAge, setStartAge] = useState(0);
  const { avgAge = 18 } = props;
  const chartRef = useRef(null);

  const averageData = [
    { startValue: 0, value: 1234, axis: 'A', color: 'red' },
    { startValue: 0, value: 304485, axis: 'B', color: 'blue' },
    { startValue: 0, value: 3049, axis: 'C', color: 'yellow' },
    { startValue: 0, value: 30495, axis: 'D', color: 'blue' },
  ];

  const chartData = [
    {
      name: '2021年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
  ];
  const getOptions = (data) => {
    return {
      title: {
        text: '外卖人数分布',
        subtext: '数据来自网络',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['2021年'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: ['广东', '北京', '上海', '杭州', '云南', '中国'],
      },
      series: data,
    };
  };

  useChartHook(chartRef, getOptions(chartData));

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
              duration={100}
              decimals={2}
            />
            <span className="age-unit">岁</span>
          </div>
        </div>
      </div>
      <div className="average-age-chart" ref={chartRef} />
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
