import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    let color = []; // 数据对应的颜色值

    data.map((item) => {
      color.push(item.color);
    });
    return {
      color,
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '70%',
          center: ['25%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data,
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions(props.chartData));

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef} />;
}
