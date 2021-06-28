import React, { useState, useEffect, useRef } from 'react';
import CountryCategory from '../CountryCategory/index';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const headerData = [
    {
      title: '广州',
      img: 'https://img.alicdn.com/tfs/TB1Z171qebviK0jSZFNXXaApXXa-30-29.png',
      chartRef: useRef(null),
    },
    {
      title: '深圳',
      img: 'https://img.alicdn.com/tfs/TB1b8Tzq7T2gK0jSZFkXXcIQFXa-28-24.png',
      chartRef: useRef(null),
    },
    {
      title: '清远',
      img: 'https://img.alicdn.com/tfs/TB12MbzqYY1gK0jSZTEXXXDQVXa-28-30.png',
      chartRef: useRef(null),
    },
  ];

  const getOptions = () => {
    let data = [];
    data[0] = Math.ceil(Math.random() * 100);
    data[1] = 100 - data[0];
    return {
      color: ['rgb(210, 244, 148)', 'rgb(79, 79, 79)'],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      title: {
        text: `${data[0]}%`,
        left: 'center',
        top: '60%',
        textStyle: {
          color: 'rgb(210, 244, 148)',
          fontSize: 18,
          align: 'center',
        },
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['70%', '90%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: data[0],
              name: '活跃用户',
            },
            {
              value: data[1],
              name: '非活跃用户',
            },
          ],
        },
      ],
    };
  };

  headerData.forEach((item) => {
    useChartHook(item.chartRef, getOptions());
  });

  useEffect(() => {}, []);

  return (
    <div className="activate-user">
      <div className="title">地区商家销售排行</div>
      <div className="list-wrapper">
        {headerData.map((item, index) => (
          <div className="list-inner" key={index}>
            <div className="list">
              <div className="list-title">{item.title}</div>
              <div className="list-separator-wrapper">
                <div className="list-separator" />
              </div>
              <div className="chart-wrapper">
                <div className="img-wrapper">
                  <img src={item.img} />
                </div>
                <div className="chart" ref={item.chartRef} />
              </div>
              <div className="category-wrapper">
                <CountryCategory data={['商家', '订单数', '销售额']} />
              </div>
              <div className="scroll-list-wrapper">
                {/* <auto-scroll-table
                :config="config[index]"
                style="width:100%;height:190px;background:rgb(40,40,40);"
              /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
