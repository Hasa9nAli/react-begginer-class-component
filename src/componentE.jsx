import React, { Component } from 'react'
import ComponentF from './componentF'
import {createContext} from './userContext'

export class ComponentE extends Component {
    static contextType = createContext;
 
  render() {
    return (
        <>
        <div>from e {this.context}</div>
      <ComponentF/>
      </>
    )
  }
}
// i can use the Consumer component to get the value from the provider component
export default ComponentE