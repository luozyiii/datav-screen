import React, { useState, useEffect } from 'react';

import './index.less';

export default function (props) {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(-1);

  const color = ['rgb(140, 160, 173)', 'rgb(80, 80, 80)'];

  const handleClick = (index) => {
    setSelected(index);
  };
  const handleMouseEnter = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(-1);
  };

  useEffect(() => {}, []);

  return (
    <div className="country-category">
      {props.data &&
        props.data.map((item, index) => (
          <div
            className="category"
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            {index === selected && (
              <div className="selected" style={{ background: color[0] }}>
                {item}
              </div>
            )}
            {index === hover && (
              <div className="hovered" style={{ background: color[1] }}>
                {item}
              </div>
            )}
            {![selected, hover].includes(index) && <div>{item}</div>}
          </div>
        ))}
    </div>
  );
}
