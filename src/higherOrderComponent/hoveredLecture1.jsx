import React, { Component } from 'react'

 class HoveredLecture1 extends Component {
    constructor(props) {
      super(props)
      this.STYLE = {
        
      }  
      this.state = {
            count : 0,
            Style:{
                

            }
      }
    }
    UnHovertHandle = () => {
        this.setState({
            Style:{
                color:'black',
                display:'inline-block',
                transition:'all 1s ease-in-out',
                fontSize : '20px',
                fontWeight : 'bold',
            }
        })
    }

    HoverHandle = ()  => {
        this.setState(prevState =>{
            return {
                count : prevState.count + 1,
                Style : {
                    color : '#000',
                    fontSize : '20px',
                    fontWeight : 'bold',
                    textDecoration : 'underline', 
                    backgroundColor : '#44dd44', 
                    padding : '10px' , 
                    borderRadius : '10px', 
                    transition : 'all 0.5s', 
                    display : 'inline-block'

    
                }
            }
        })
        
      }
  render() {
    return (
      <h1 style={(this.state.Style)} onMouseOver={this.HoverHandle} onMouseOut={this.UnHovertHandle}> text hovered {this.state.count}</h1>
    )
  }
}

export default HoveredLecture1