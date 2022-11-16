import * as React from 'react';
import './css/testToggle.css';
import { useState, useRef } from 'react';

const TestToggle: any = (props: any) => {
  // states
  const [stDirection, setDirection] = useState('left');
  const [stSwitch, setSwitch] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  // change the thumb directions based on state
  let thumbClass =
    stDirection === 'right'
      ? !stSwitch
        ? 'toggleButton toggleRight toggleWhite'
        : 'toggleButton toggleRight toggleGreen'
      : !stSwitch
      ? 'toggleButton toggleWhite'
      : 'toggleButton toggleGreen';

  const handleClick = () => {
    const newDirection = stDirection === 'left' ? 'right' : 'left';
    setDirection(newDirection); // async
    // notify parent via callback
    if (props.onToggle) {
      props.onToggle(newDirection);
    }
  };

  return (
    <div className="toggleBase" onClick={() => handleClick()}>
      <div
        ref={thumbRef}
        className={thumbClass}
        onClick={() => handleClick()}
      ></div>
    </div>
  );
};

export default TestToggle;
