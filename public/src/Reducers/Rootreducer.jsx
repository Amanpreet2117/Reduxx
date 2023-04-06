import React from 'react'
import { carddata } from './Reduser'

import {combineReducers} from 'redux'
const Rootreducer=combineReducers({
  carddata,
})
export default Rootreducer