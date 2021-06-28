import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AverageViewChart from './components/AverageViewChart';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="average-view">
      <div className="left">
        <div className="title">实时订单趋势图</div>
        <div className="sub-title">Number Of Real-time Orders</div>
        <div className="total">
          <CountUp start={1000} end={12000} duration={1000} separator="," />
        </div>
        <div className="tiny-title">周同比增长率</div>
        <div className="percent-text">
          <span className="percent-text-1">
            <CountUp start={1} end={2} duration={1000} decimals={2} />
          </span>
        </div>
      </div>
      <div className="right">
        <div className="average-view-chart">
          <AverageViewChart />
        </div>
      </div>
    </div>
  );
}
