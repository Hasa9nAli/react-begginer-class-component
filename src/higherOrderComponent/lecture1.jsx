import React, { Component } from 'react'

export class Lecture1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    
    }
    // is equivalent to this.setState({count: count + 1})
    // handleClick = () => {
    //     this.setState({
    //             count : this.state.count + 1
    //     })
    //   }

    // we use the prevState because we want to change the previous state
    // and we need to write return in side the setState 
    // so if you want to return  the value of setState  you need to return the new state
    handleClick = () => {
        this.setState( prevState => {
            return {
                count : prevState.count + 1
            }
        })

      }
  render() {
    const {count} = this.state
    return (
      <button onClick={this.handleClick}>clicked {count}</button>
    )
  }
}

export default Lecture1