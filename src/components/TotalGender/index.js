import React from 'react';
import CountUp from 'react-countup';

import './index.less';

export default function (props) {
  return (
    <div className="total-gender">
      <div className="title-wrapper">
        <div className="left">
          <img src="http://img.alicdn.com/tfs/TB1p9Luq8v0gK0jSZKbXXbK2FXa-500-500.png" />
        </div>
        <div className="right">
          <div className="title">男性用户人数</div>
          <div className="sub-title">Number of male users</div>
          <div className="age">
            <CountUp start={15} end={22} duration={1000} />
            <span className="age-unit">万人</span>
          </div>
        </div>
      </div>
      <div className="title-wrapper">
        <div className="left">
          <img src="http://img.alicdn.com/tfs/TB1p9Luq8v0gK0jSZKbXXbK2FXa-500-500.png" />
        </div>
        <div className="right">
          <div className="title">女性用户人数</div>
          <div className="sub-title">Number of female users</div>
          <div className="age">
            <CountUp start={18} end={26} duration={1000} />
            <span className="age-unit">万人</span>
          </div>
        </div>
      </div>
    </div>
  );
}
