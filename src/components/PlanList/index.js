import React, { useState, useEffect } from 'react';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="plan-list">
      <div className="title">区域销售大盘环比分析</div>
      <div className="list">
        {/* <auto-scroll-table
        :config="config"
        style="width:100%;height:820px;background:rgb(40,40,40);"
      /> */}
      </div>
    </div>
  );
}
