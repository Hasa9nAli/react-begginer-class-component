import React from 'react'
import ReactDOM from 'react-dom'
// used to show box and beautiful used 
// show this video is great job => https://www.youtube.com/watch?v=LyLa7dU5tp8
function Portal() {
    // this ReactDom.createportal is a function that takes two arguments 
    // first argument is jsx 
    // second argument is the dom node where we want to render the jsx
  return ReactDOM.createPortal(
    <h1>Portals</h1>,
    document.getElementById('portal-root')
  )
  // now if you click the right click on the portal you wil find the h1 tag 
  // in side the portal-root not inside the root 
}

export default Portal