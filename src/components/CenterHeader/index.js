import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

import './index.less';

export default function (props) {
  const headerData = [
    {
      title: '今日销售额',
      subTitle: "Today's Sales Amount",
      startVal: 18000 || 0,
      endVal: 20000,
      img: 'https://www.youbaobao.xyz/datav-res/money.png',
    },
    {
      title: '今日订单量',
      subTitle: "Today's Total Orders",
      startVal: 10000 || 0,
      endVal: 10020,
      img: 'https://www.youbaobao.xyz/datav-res/order.png',
    },
    {
      title: '今日交易用户数',
      subTitle: "Today's Payed Users",
      startVal: 60 || 0,
      endVal: 70,
      img: 'https://www.youbaobao.xyz/datav-res/member.png',
    },
    {
      title: '今日新增用户数',
      subTitle: "Today's New Users",
      startVal: 50 || 0,
      endVal: 60,
      img: 'https://www.youbaobao.xyz/datav-res/follow.png',
    },
  ];

  const project = [
    {
      title: '转化率',
      value: `20%`,
      img: 'https://www.youbaobao.xyz/datav-res/success.png',
    },
    {
      title: '退单率',
      value: `0.60%`,
      img: 'https://www.youbaobao.xyz/datav-res/failed.png',
    },
  ];

  return (
    <div className="center-header">
      <div className="item-wrapper">
        {headerData.map((item, index) => (
          <div className="item" key={index}>
            <div className="left">
              <div className="bg">
                <div
                  className="img"
                  style={{ backgroundImage: `url('${item.img}'` }}
                />
              </div>
            </div>
            <div className="right">
              <div className="title">{item.title}</div>
              <div className="sub-title">{item.subTitle}</div>
              <div className="total">
                <CountUp
                  start={item.startVal}
                  end={item.endVal}
                  separator=","
                  duration={1000}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project-wrapper">
        {project.map((item, index) => (
          <div className="project" key={index}>
            <div className="project-img">
              <img src={item.img} />
            </div>
            <div className="project-text">{item.title}</div>
            <div className="project-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
