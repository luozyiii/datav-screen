import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    return {
      color: ['rgb(209,248,138)', 'rgba(65,65,65,.5)'],
      grid: {
        left: 40,
        right: 0,
        bottom: 30,
        top: 20,
      },
      xAxis: {
        type: 'category',
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: 'rgb(98,105,113)',
          fontSize: 16,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: 'rgb(124,136,146)',
          },
        },
        data: ['分类A', '分类B', '分类C', '分类D', '分类E', '分类F'],
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dotted',
          },
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: 'rgb(124,136,146)',
          },
        },
        axisLabel: {
          color: 'rgb(98,105,113)',
          fontSize: 16,
        },
        axisTick: { show: false },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: 40,
        },
        {
          data: [100, 200, 123, 58, 70, 203, 100],
          type: 'bar',
          barWidth: 40,
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions(props.chartData));

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef} />;
}
