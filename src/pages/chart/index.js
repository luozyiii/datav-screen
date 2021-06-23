import React, { useState, useEffect } from 'react';

import TatolDeviceChart from '../../components/TatolDevice/components/TatolDeviceChart';

export default function (props) {
  const chartData = [
    { value: 40, name: 'ios', color: 'rgb(176,207,120)' },
    { value: 33, name: 'android', color: 'rgb(157,195,91)' },
    { value: 28, name: 'other', color: 'rgb(131,167,72)' },
  ];
  return (
    <div>
      <TatolDeviceChart chartData={chartData} />
    </div>
  );
}
