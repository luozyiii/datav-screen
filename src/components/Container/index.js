import React, { useState, useEffect, useRef } from 'react';

import './index.less';

export default function (props) {
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  // const [originalWidth, setOriginalWidth] = useState(0);
  // const [originalHeight, setOriginalHeight] = useState(0);
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const [transform, setTransform] = useState(null);
  const domRef = useRef(null);
  const { children, options = {} } = props;

  useEffect(() => {
    initSize();
    window.addEventListener('resize', initSize);
  }, []);

  useEffect(() => {
    updateScale();
  }, [realWidth]);

  const initSize = () => {
    const { clientWidth, clientHeight } = domRef.current;
    const { width, height } = options;
    const screen = window.screen;
    // 大屏的最终尺寸
    setRealWidth(width || clientWidth);
    setRealHeight(height || clientHeight);
    // if (width && height) {
    //   setWidth(width);
    //   setHeight(height);
    // } else {
    //   setWidth(clientWidth);
    //   setHeight(clientHeight);
    // }

    // 获取画布尺寸
    // setOriginalWidth(screen.width);
    // setOriginalHeight(screen.height);

    console.log(width, height);
    console.log(clientWidth, clientHeight);
    console.log(screen.width, screen.height);
  };

  const updateSize = () => {
    if (width && height) {
      setDom({
        style: {
          width: `${width}px`,
          height: `${height}px`,
        },
      });
    } else {
      setDom({
        style: {
          width: `${originalWidth}px`,
          height: `${originalHeight}px`,
        },
      });
    }
  };

  const updateScale = () => {
    // 获取真实的视口尺寸
    const currentWidth = document.body.clientWidth;
    const currentHeight = document.body.clientHeight;
    // console.log(currentWidth, currentHeight);
    const widthScale = currentWidth / realWidth;
    const heightScale = currentHeight / realHeight;
    setTransform(`scale(${widthScale}, ${heightScale})`);
  };

  return (
    <div
      id="container"
      ref={domRef}
      // style={{ width: `${realWidth}px`, height: `${realHeight}px`, transform }}
    >
      {children}
    </div>
  );
}
