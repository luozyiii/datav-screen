import React, { Component } from 'react';
import './index.less';

export default class TopHeader extends Component {
  render() {
    return (
      <div className="top-header">
        {/* <dv-decoration-8 className="header-left-decoration" />
        <dv-decoration-5 className="header-center-decoration" />
        <dv-decoration-8 className="header-right-decoration" reverse /> */}
        <div className="title">数据大屏-看板</div>
      </div>
    );
  }
}
