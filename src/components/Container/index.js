import React, { Component, createRef } from 'react';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      heigth: 0,
    };
    this.domRef = createRef();
  }

  componentDidMount() {
    const { clientWidth, clientHeight } = this.domRef.current;
    const { width, height } = this.props.options;
    let w, h;
    if (width && height) {
      w = width;
      h = height;
    } else {
      w = clientWidth;
      h = clientHeight;
    }
    this.setState({
      width: w,
      heigth: h,
    });
  }

  render() {
    const { children } = this.props;
    return <div ref={this.domRef}>{children}</div>;
  }
}
