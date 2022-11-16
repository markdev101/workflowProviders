import * as React from 'react';
import './css/testRadios.css';
import { useState } from 'react';

const TestRadios: any = (props: any) => {
  const [selected, setSelected] = useState(props.selected || '');

  const handleChange = (e: any) => {
    const target = e.target;
    console.log('clicked ', target);
    if (target.checked) {
      console.log('Choosing ' + target.value);
      setSelected(target.value);
    }
  };
  const title = props.title ? props.title : 'Select one:';

  return (
    <div className="radios">
      <div className="radiosTitle">{title}</div>
      <div className="radioButtons">
        {props.items && props.items.length > 0
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
          : null}
      </div>
    </div>
  );
};

export default TestRadios;
