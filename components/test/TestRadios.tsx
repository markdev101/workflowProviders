import * as React from 'react';
import './css/testRadios.css';
import { useContext } from 'react';
import AppContext from '../../providers/AppContext';

const TestRadios: any = (props: any) => {
  const { appState, setAppState } = useContext(AppContext);
  const appObj = JSON.parse(appState);

  const handleChange = (e: any) => {
    const target = e.target;
    if (target.checked) {
      console.log('TestRadios= ' + target.value);
      const newState = {
        ...appObj,
        mode: target.value,
      };
      const s = JSON.stringify(newState);
      setAppState(s);
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
                      checked={appObj.mode === v}
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
