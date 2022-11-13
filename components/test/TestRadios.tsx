import './css/testRadios.css';
import React, { useState } from 'react';

const TestRadios: any = (props: any) => {
  const [selected, setSelected] = useState('workflow');

  // states
  // const [stDirection, setDirection] = useState("left");
  // const [stSwitch, setSwitch] = useState(false);

  // parse attributes/props
  // if (typeof props.switch !== undefined) {
  //   setSwitch(props.switch === "true");
  // }
  // if (
  //   props.direction &&
  //   (props.direction === "left" || props.direction === "right")
  // ) {
  //   setDirection(props.direction);
  // }

  // const thumbClass =
  //   stDirection === "right"
  //     ? !stSwitch
  //       ? "toggleButton toggleRight toggleWhite"
  //       : "toggleButton toggleRight toggleGreen"
  //     : "toggleButton toggleWhite";

  // const handleClick = () => {
  //   setDirection(stDirection === "left" ? "right" : "left");
  // };
  const handleChange = (e: any) => {
    const target = e.target;
    console.log('clicked ', target);
    if (target.checked) {
      console.log('Choosing ' + target.value);
      setSelected(target.value);
    }
  };
  const title = props.title ? props.title : 'Select one:';
  const items = props.items
    ? props.items.map((v: any) => {
        return (
          <div className="radioItem">
            <label>
              <input
                type="radio"
                value={v.name}
                checked={selected === v.name}
                onChange={handleChange}
              />
              <span>{v.name}</span>
            </label>
          </div>
        );
      })
    : '';

  // return (
  //   <div className="toggleBase" onClick={() => handleClick()}>
  //     <div className={thumbClass} onClick={() => handleClick()}></div>
  //   </div>
  // );
  return (
    <div className="radios">
      <div className="radiosTitle">{title}</div>
      <div className="radioButtons">{items}</div>
    </div>
  );
};

export default TestRadios;
