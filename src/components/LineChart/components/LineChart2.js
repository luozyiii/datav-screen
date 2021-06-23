import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    let legendData = ['去年骑手月人均接单', '今年骑手月人均接单'];
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
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
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
          data: [5, 100, 70, 120, 80, 15, 200, 20, 354, 652, 20, 20],
        },
        {
          name: legendData[1],
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
          },
          symbol: 'none',
          data: [10, 50, 80, 4, 90, 50, 105, 30, 69, 306, 919, 566],
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions(props.chartData));

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef} />;
}
