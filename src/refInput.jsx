import React from 'react'

// this is React.forwardRef() it's take's two parameters props and ref 
// props is the props that we pass to the component that we want to forwardRef to 
// ref is the reference to the parent component that we want to forwardRef to
const RefInput = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      {/* if we use the ref={props.ref} 
      will show an error because the value return null   */
      }
    <input type='text' ref={ref}/>
   
    </React.Fragment>
  )
})

export default RefInput