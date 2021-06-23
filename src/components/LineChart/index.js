import React, { useState, useEffect } from 'react';

import LineChart2 from './components/LineChart2';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="line-chart">
      <div className="title-wrapper">
        <div className="title">外卖骑手概况</div>
        <div className="sub-title">Rider Growth rate</div>
      </div>
      <div className="average-age-chart2">
        <LineChart2 />
      </div>
    </div>
  );
}
