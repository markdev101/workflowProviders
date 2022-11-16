import * as React from 'react';
import './css/testRadios.css';
import { useState } from 'react';

const TestRadios: any = (props: any) => {
  const [selected, setSelected] = useState(props.selected || '');

  const handleChange = (e: any) => {
    const target = e.target;
    if (target.checked) {
      console.log('TestRadios= ' + target.value);
      setSelected(target.value);
    }
  };
  const spanStyle = {
    marginLeft: '10px',
  };
  const title = props.title || 'Select one:';

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
                      value={v}
                      checked={selected === v}
                      onChange={handleChange}
                    />
                    <span style={spanStyle}>{v}</span>
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
