import * as React from 'react';
import './css/testRadios.css';
import { useState } from 'react';

const TestRadios: any = (props: any) => {
  const [selected, setSelected] = useState(props.selected || '');

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
  const list = props.items ? JSON.parse(props.items) : null;
  const title = props.title ? props.title : 'Select one:';

  return (
    <div className="radios">
      <div className="radiosTitle">{title}</div>
      <div className="radioButtons">
        {list && list.length > 0
          ? list.map((v: any) => {
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
          : null}
      </div>
    </div>
  );
};

export default TestRadios;
