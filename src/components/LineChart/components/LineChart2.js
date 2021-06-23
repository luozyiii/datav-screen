import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    let legendData = ['A', 'B'];
    const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)'];
    return {
      color: colors,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        top: 20,
        right: 40,
        icon: 'rect',
        textStyle: {
          fontSize: 16,
          color: colors[2],
        },
        data: legendData,
      },
      grid: {
        top: 60,
        bottom: 30,
        left: 80,
        right: 40,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[2],
            },
          },
          axisLabel: {
            fontSize: 16,
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        {
          type: 'category',
          axisTick: { show: false },
          axisLine: { show: false },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[2],
            },
          },
          axisLabel: {
            fontSize: 16,
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
            },
          },
        },
      ],
      series: [
        {
          name: legendData[0],
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          lineStyle: {
            width: 2,
          },
          symbol: 'none',
          data: [5, 100, 70, 120, 80, 15, 200],
        },
        {
          name: legendData[1],
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
          },
          symbol: 'none',
          data: [10, 50, 80, 4, 90, 50, 105],
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions(props.chartData));

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef} />;
}
