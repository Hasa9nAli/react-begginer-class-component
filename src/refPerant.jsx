import React, { Component } from 'react'
import RefInput from './refInput'

class RefPerant extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    // this is function to  make the input field focusable
    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <React.Fragment>
        {/* pass the ref from the parent to the child and
         make the child focusable  when button is clicked */} 
        <RefInput ref={this.inputRef}/>
        {/*
        this is button to make the input field is focused when clicked this button 
        */}
        <button onClick={this.clickHandler}>focus the input</button>
      </React.Fragment>
    )
  }
}

export default RefPerant