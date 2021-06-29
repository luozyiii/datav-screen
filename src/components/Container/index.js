import React, { useState, useEffect, useRef } from 'react';

import './index.less';

export default function (props) {
  const [realWidth, setRealWidth] = useState(null);
  const [realHeight, setRealHeight] = useState(null);
  const [transform, setTransform] = useState(null);
  const domRef = useRef(null);
  const { children, options = {} } = props;

  useEffect(async () => {
    await initSize();
    window.addEventListener('resize', initSize);
  }, []);

  const initSize = () => {
    const { width, height } = options; // 指定尺寸的大屏
    let clientWidth, clientHeight;
    if (domRef) {
      // 容器的大小
      clientWidth = domRef.current?.clientWidth;
      clientHeight = domRef.current?.clientHeight;
    }
    const screen = window.screen;
    const currentWidth = document.body.clientWidth;
    const currentHeight = document.body.clientHeight;

    console.log('-------------');
    console.log('指定尺寸:', width, height);
    console.log('容器尺寸:', clientWidth, clientHeight);
    console.log('窗口画布尺寸:', screen.width, screen.height);
    console.log('真实可视尺寸:', currentWidth, currentHeight);
    console.log('-------------');

    // 大屏的最终尺寸
    let _realWidth = width || clientWidth;
    let _realHeight = height || clientHeight;

    const widthScale = currentWidth / _realWidth;
    const heightScale = currentHeight / _realHeight;
    const _transform = `scale(${widthScale}, ${heightScale})`;

    setRealWidth(_realWidth);
    setRealHeight(_realHeight);
    setTransform(_transform);
  };

  return (
    <div
      id="container"
      ref={domRef}
      style={{ width: `${realWidth}px`, height: `${realHeight}px`, transform }}
    >
      {children}
    </div>
  );
}
