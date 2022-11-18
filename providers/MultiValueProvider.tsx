import * as React from 'react';
import {createContext,useState} from 'react'

const [color, setColor] = useState('green');
const colorValue = {color, setColor}

const [type, setType] = useState('small');
const typeValue = { type, setType };

let INITIAL_STATE = [colorValue, typeValue]

export const MultiValueContext = createContext(INITIAL_STATE)

export const MultiValueProvider = ({ children }) => {
  const [values, setValues ] = useState(INITIAL_STATE)

  const swapColors = () => {

  }

  React.useEffect(()=> {
    console.log("MultiValueProvider initial state", values)
  }, [values])

  return (
    <MultiValueContext.Provider value={{ values, setValues}}>
      {children}
      </MultiValueContext.Provider>
  )
}


const MVPControl: any = (props: any) => {
    const {color, type} = React.useContext(MultiValueContext)
    // destructure context
    const {{color, setColor}, {type, setType}} = v;


} 