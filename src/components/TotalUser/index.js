import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

import './index.less';

export default function (props) {
  const [startVal, setStartVal] = useState(0);
  const { todayUser = 0, growthLastDay = 0, growthLastMonth = 0 } = props;

  useEffect(() => {}, []);

  return (
    <div className="total-user">
      <div className="title">外卖用户总数</div>
      <div className="sub-title">User Total Count</div>
      <div className="total">
        <CountUp
          start={startVal}
          end={todayUser}
          duration={1000}
          separator=","
        />
      </div>
      <div className="percent-text">
        <span className="percent-text-1">
          每日增长率:
          <CountUp
            start={startVal}
            end={growthLastDay}
            duration={1000}
            decimals={2}
            suffix="%"
          />
        </span>
        <span className="percent-text-2">
          每月增长率:
          <CountUp
            start={startVal}
            end={growthLastMonth}
            duration={5000}
            decimals={2}
            suffix="%"
          />
        </span>
      </div>
      <div className="percent">
        <div className="percent-inner-wrapper">
          <div
            className="percent-inner"
            style={{ width: `${growthLastDay}%` }}
          />
        </div>
      </div>
    </div>
  );
}
