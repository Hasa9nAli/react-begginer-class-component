import React from 'react';

// if we pass the value in the React.createContext method, if we remove the provider the value 
// who to show it's the default  
const createContext = React.createContext(/*'default'*/) ;
const { Provider, Consumer } = createContext;

export { Provider, Consumer, createContext };