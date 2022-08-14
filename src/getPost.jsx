import React, { Component } from 'react'
import axios from 'axios'

 class GetPost extends Component {
    state = {
        userId: '', 
        title :  '' ,
        body : '', 

    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {this.state = response.data
        console.log('from get',this.state)})
    }

    handleChange = (e) => {
        // this is good way and reusable method 
        this.setState({[e.target.name]:e.target.value})
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {this.state = response.data
        console.log('from post',this.state)
        })
    }

    render() {
        const { userId, title, body } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        name = 'userId'
        value = {userId}
        onChange = {this.handleChange}
        style={{display:'block'}}
        />
        <input  type="text"
        name = 'title'
        value ={title}
        onChange = {this.handleChange}
        style={{display:'block'}}
        />
        <input type="text"
        name = 'body'
        value = {body}
        onChange = {this.handleChange}
        style={{display:'block'}}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default GetPost