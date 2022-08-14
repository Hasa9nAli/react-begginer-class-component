import React, { Component } from 'react'

export class Ref extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      
    }
    componentDidMount() {
        // i put this in the componentDidMount because i want to access the inputRef after the component has been rendered
        // if i put this in the render method, this is not focused yet and the value is empty
        this.inputRef.current.focus()
    }
  render() {
    return (
       <React.Fragment> 
            <input type='text' 
            /*this make the input field focusable because i put this.inputRef.current.focus()
            in the componentDidMount method*/
            ref={this.inputRef}/>
            <button onClick={() => {
                if (this.inputRef.current.value === '') {
                    console.log('is empty')
                }
                else {
                console.log(this.inputRef.current.value); 
                this.inputRef.current.value=''}

                }
                // it's very good use of the ref it provides many useful features 
                }>add the value here</button>

        </React.Fragment>
    )
  }
}

export default Ref