import * as React from 'react';
import './css/testToggle.css';
import { useState, useEffect, useRef } from 'react';

const TestToggle: any = (props: any) => {
  // states
  const [stDirection, setDirection] = useState('left');
  const [stSwitch, setSwitch] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  let thumbClass = 'toggleButton toggleWhite';

  useEffect(() => {
    console.log('TestToggle useEffect: DIR, State=', props.direction, stDirection.toUpperCase());
    const dir = stDirection ? stDirection : 'left';
    thumbClass =
      dir === 'right'
        ? !stSwitch
          ? 'toggleButton toggleRight toggleWhite'
          : 'toggleButton toggleRight toggleGreen'
        : !stSwitch
        ? 'toggleButton toggleWhite'
        : 'toggleButton toggleGreen';
    console.log('TestToggle useEffect thumbClass=', thumbClass);
    thumbRef.classList = thumbClass;
  });
  console.log('TestToggle: thumbClass= ', thumbClass);

  const handleClick = () => {
    const newDirection = stDirection === 'left' ? 'right' : 'left';
    console.log('TESTToggle changed to ' + newDirection);

    // change thumb position
    setDirection(newDirection); // async

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
