import * as React from 'react'
import {useContext} from 'react'
import { MultiValueContext } from '../../providers/MultiValueProvider';
import Providers from '../../providers/NestedProviders';

const MvpComponent: any = (props: any) => {
  const {color, type} = React.useContext(MultiValueContext)
  // destructure context
  const {{stColor, setStColor}, {type, setType}} = v;


} 