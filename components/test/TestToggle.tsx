import * as React from 'react';
import './css/testToggle.css';
import { useState, useRef } from 'react';

/* TestToggle - stateless toggle
 *
 *    set 'direction' attribute to 'left' or 'right'
 *    set 'switch' attribute to 'true' or 'false'
 */
const TestToggle: any = (props: any) => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const dir = props.direction;
  const isSwitch =
    typeof props.switch != undefined
      ? props.switch === 'true'
        ? true
        : false
      : false;

  // change the thumb directions based on state
  let thumbClass =
    dir === 'right'
      ? !isSwitch
        ? 'toggleButton toggleRight toggleWhite'
        : 'toggleButton toggleRight toggleGreen'
      : !isSwitch
      ? 'toggleButton toggleWhite'
      : 'toggleButton toggleGreen';

  const handleClick = () => {
    const newDirection = dir === 'left' ? 'right' : 'left';
    // notify parent via callback
    if (props.onToggle) {
      // callback should trigger a re-render of this with direction attribute set correctly
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
