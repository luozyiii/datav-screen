import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import TatolDeviceChart from './components/TatolDeviceChart';

import './index.less';

export default function (props) {
  const refData = [
    { value: 40, name: 'ios', color: 'rgb(176,207,120)' },
    { value: 33, name: 'android', color: 'rgb(157,195,91)' },
    { value: 28, name: 'other', color: 'rgb(131,167,72)' },
  ];

  return (
    <div className="total-device">
      <div className="total-device-left">
        <div className="total-device-chart">
          <TatolDeviceChart chartData={refData} />
        </div>
      </div>
      <div className="total-device-right">
        <div className="title-wrapper">
          <div className="left">
            <div className="title">外卖登录设备</div>
            <div className="sub-title">Distribution of Internet devices</div>
          </div>
          <div className="right">
            <div className="age">
              <CountUp start={950} end={99999} duration={10000} />
              <span className="age-unit">台</span>
            </div>
          </div>
        </div>
        <div className="average-data-wrapper">
          {refData.map((item, index) => (
            <div className="average-data" key={index}>
              <div className="average-data-value">
                <CountUp
                  start={item.value - 20}
                  end={item.value}
                  duration={1000}
                />
              </div>
              <div className="average-data-axis">
                <div className="point" style={{ background: item.color }} />
                <div className="text">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
