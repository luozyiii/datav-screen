import React, { useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = (data = []) => {
    return {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2021-2', '2012-02', '2021-03', '2021-04', '2021-05', '2021-06'],
        axisLine: {
          lineStyle: {
            color: 'rgba(200, 200, 200)',
          },
        },
        axisLabel: {
          fontSize: 16,
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgb(50, 50, 50)',
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(200, 200, 200)',
          },
        },
        axisLabel: {
          fontSize: 16,
        },
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
        },
        {
          start: 0,
          end: 100,
          handleIcon:
            'M 0.0525 0.5656 L 0.0525 0 L -0.0583 0 L -0.0583 0.5656 L -0.2449 0.5656 L -0.2449 1.4344 L -0.0525 1.4344 L -0.0525 2 L 0.0525 2 L 0.0525 1.4344 L 0.2449 1.4344 L 0.2449 0.5656 L 0.0525 0.5656 Z M 0.1399 1.1953 L -0.1458 1.1953 L -0.1458 1.1137 L 0.1399 1.1137 L 0.1399 1.1953 Z M 0.1399 0.8863 L -0.1458 0.8863 L -0.1458 0.8047 L 0.1399 0.8047 L 0.1399 0.8863 Z',
          handleSize: '100%',
          handleStyle: {
            color: '#a7b7cc',
          },
          textStyle: {
            color: 'rgb(200, 200, 200)',
          },
          fillerColor: 'rgba(120,126,134,.3)',
          dataBackground: {
            lineStyle: {
              color: 'grey',
            },
            areaStyle: {
              color: 'gray',
            },
          },
          borderColor: 'rgb(200, 200, 200)',
        },
      ],
      series: [
        {
          name: '模拟数据',
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          // itemStyle: {
          //   color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     {
          //       offset: 0,
          //       color: '#C2C90B',
          //     },
          //     {
          //       offset: 0.5,
          //       color: '#A1DC14',
          //     },
          //     {
          //       offset: 1,
          //       color: 'rgb(188, 222, 129)',
          //     },
          //   ]),
          // },
          data: [6, 10, 60, 50, 66, 16],
        },
      ],
      grid: {
        top: 40,
        bottom: 80,
        right: 40,
        left: 80,
      },
    };
  };

  useChartHook(chartRef, getOptions());

  return <div style={{ width: '100%', height: '100%' }} ref={chartRef} />;
}
