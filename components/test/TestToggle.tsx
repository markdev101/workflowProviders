import * as React from 'react';
import './css/testToggle.css';
import { useState } from 'react';

const TestToggle: any = (props: any) => {
  // states
  const [stDirection, setDirection] = useState('left');
  const [stSwitch, setSwitch] = useState(false);

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
  const dir = props.direction ? props.direction : 'left';
  const thumbClass =
    dir === 'right'
      ? !stSwitch
        ? 'toggleButton toggleRight toggleWhite'
        : 'toggleButton toggleRight toggleGreen'
      : 'toggleButton toggleWhite';

  const handleClick = () => {
    const newDirection = stDirection === 'left' ? 'right' : 'left';
    console.log('TESTToggle changed to ' + newDirection);

    setDirection(newDirection); // async
    if (props.onToggle) {
      props.onToggle(newDirection);
    }
  };

  return (
    <div className="toggleBase" onClick={() => handleClick()}>
      <div className={thumbClass} onClick={() => handleClick()}></div>
    </div>
  );
};

export default TestToggle;
