import React, { Component } from 'react'
import {Consumer} from './userContext'

export class ComponentF extends Component {
  render() {
    return (
        <Consumer>
            {
                value => {
                    return <h1>{value}</h1>
                }
            }
        </Consumer>
    )
  }
    
  }


export default ComponentF