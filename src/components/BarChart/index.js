import React, { useState, useEffect } from 'react';
import BarChart2 from './components/BarChart2';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="bar-chart">
      <div className="title-wrapper">
        <div className="left">
          <div className="title">当前热卖品类</div>
          <div className="sub-title">Hot Categories</div>
        </div>
        <div className="right">
          <div className="sub-title">最后更新时间：-------</div>
        </div>
      </div>
      <div className="average-age-chart3">
        <BarChart2 />
      </div>
    </div>
  );
}
