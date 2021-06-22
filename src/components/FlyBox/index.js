import React, { Component, createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.less';

export default class FlyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      heigth: 0,
      uuid: uuidv4(),
    };
    this.domRef = createRef();
  }

  componentDidMount() {
    const { clientWidth, clientHeight } = this.domRef.current;
    this.setState({
      width: clientWidth,
      heigth: clientHeight,
    });
  }

  render() {
    const {
      lineColor = '#235fa7',
      starColor = '#4fd2dd',
      starLingth = 100,
      duration = 3,
      children,
    } = this.props;
    const { width, heigth, uuid } = this.state;
    const path = `M5 5 L${width - 5} 5 L${width - 5} ${heigth - 5} L5 ${
      heigth - 5
    } Z`;
    const pathId = `fly-box-path-${uuid}`;
    const radiaGradientId = `radial-gradient-${uuid}`;
    const MaskId = `fly-box-mask-${uuid}`;
    return (
      <div className="fly-box" ref={this.domRef}>
        <svg width={width} heigth={heigth} viewBox={`0 0 ${width} ${heigth}`}>
          <defs>
            <path id={pathId} d={path} fill="none" />
            <radialGradient
              id={radiaGradientId}
              cx="50%"
              cy="50%"
              fx="100%"
              fy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="fly-box-mask">
              <circle
                r={starLingth}
                cx="0"
                cy="0"
                fill={`url(#${radiaGradientId})`}
              >
                <animateMotion
                  dur={`${duration}s`}
                  path={path}
                  rotate="auto"
                  repeatCount="indefinite"
                />
              </circle>
            </mask>
          </defs>
          <use href={`#${pathId}`} strokeWidth="1" stroke={lineColor} />
          <use
            href={`#${pathId}`}
            strokeWidth="3"
            stroke={starColor}
            mask="url(#fly-box-mask)"
          />
        </svg>
        {children && <div className="fly-box-content">{children}</div>}
      </div>
    );
  }
}
