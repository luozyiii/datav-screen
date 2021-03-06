import React, { useState, useEffect } from 'react';
import { useClockHook } from '@/hooks';
import './index.less';

export default function (props) {
  const [state, setState] = useState();

  const { date, time } = useClockHook();

  useEffect(() => {}, []);

  return (
    <div className="top-header">
      <img
        className="logo"
        src="https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/54149aa06f26afcf26f42d66c999ee8b.png"
      />
      <div className="logo-text">
        <div className="cn-text">外卖业务数据大盘</div>
        <div className="en-text">Delivery Overview of Business Data</div>
      </div>
      <div className="right-text">
        <img
          className="right-logo"
          src="https://img.alicdn.com/tfs/TB1Kbzuq.z1gK0jSZLeXXb9kVXa-600-500.png"
        />
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
}
