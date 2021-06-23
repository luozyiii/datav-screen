import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  // data [{ startValue: 31140, value: 31152, axis: '>50', color: 'rgb(251,253,142)' }]
  const getOptions = (data = []) => {
    let max = 0; // x轴最大值
    let color = []; // 数据对应的颜色值
    let series = []; // 数据
    data.map((item, i) => {
      max += item.value;
      color.push(item.color);
      if (i === 0) {
        series.push({
          type: 'bar',
          stack: 'total',
          barWidth: 18,
          data: [item.value],
        });
      } else {
        series.push({
          type: 'bar',
          stack: 'total',
          data: [item.value],
        });
      }
    });
    return {
      color,
      grid: {
        left: 20,
        right: 40,
        top: 20,
      },
      xAxis: {
        type: 'value',
        splitLine: { show: false },
        max,
        axisLine: {
          lineStyle: {
            color: 'rgb(50,51,53)',
            width: 3,
          },
        },
        axisTick: { show: false },
        axisLabel: {
          color: 'rgb(98,105,113)',
          fontSize: 18,
        },
      },
      yAxis: {
        type: 'category',
        show: false,
      },
      series,
    };
  };

  useChartHook(chartRef, getOptions(props.chartData));

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef} />;
}
