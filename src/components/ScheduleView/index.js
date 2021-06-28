import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';
import dayjs from 'dayjs';

import './index.less';

export default function (props) {
  const chartRef = useRef(null);

  const getVirtualData = (year) => {
    year = year || '2020';
    const date = dayjs(`${year}-06-01`).valueOf();
    const end = dayjs(`${year + 1}-12-31`).valueOf();
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        dayjs(time).format('YYYY-MM-DD'),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  };

  const getOptions = (data = []) => {
    return {
      calendar: [
        {
          top: 30,
          left: 80,
          right: 40,
          bottom: 10,
          range: ['2020-06-01', '2020-12-31'],
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgb(127, 127, 127)',
            },
          },
          yearLabel: { show: false },
          dayLabel: {
            color: 'rgb(127, 127, 127)',
            fontSize: 18,
          },
          monthLabel: {
            color: 'rgb(127, 127, 127)',
            fontSize: 18,
          },
          itemStyle: {
            color: 'rgb(48, 48, 48)',
            borderWidth: 1,
            borderColor: 'rgb(48, 48, 48)',
          },
        },
      ],
      series: [
        {
          name: '步数',
          type: 'scatter',
          coordinateSystem: 'calendar',
          data: data,
          symbolSize: function (val) {
            return val[1] / 600;
          },
          itemStyle: {
            color: 'rgb(208,248,138)',
          },
        },
        {
          name: 'Top 12',
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          data: data
            .sort(function (a, b) {
              return b[1] - a[1];
            })
            .slice(0, 12),
          symbolSize: function (val) {
            return val[1] / 500;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          itemStyle: {
            color: 'rgb(208,248,138)',
            shadowBlur: 10,
            shadowColor: '#333',
          },
          zlevel: 1,
        },
      ],
    };
  };

  const data = getVirtualData(2020);

  useChartHook(chartRef, getOptions(data));

  return (
    <div className="schedule-view">
      <div className="schedule-view-chart" ref={chartRef} />
      <div className="bg1 bg" />
      <div className="bg2 bg" />
    </div>
  );
}
