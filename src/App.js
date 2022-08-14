import React , {Component} from 'react';
import './App.css';
import Ref from './ref';
import RefPerant from "./refPerant";
import Partial from './portals';
import ErrorBoundry from './errorBoundry';
import Item from './item';
import Lecture1 from  './higherOrderComponent/lecture1';
import HoveredLecture1 from './higherOrderComponent/hoveredLecture1';
import {Provider} from './userContext'
import ComponentC from './componentC';
import GetPost from './getPost';
class App extends Component{

  render(){
    return(
      // <React.Fragment>
      // <Ref />

      // // <RefPerant />
      // <Partial />
      // </React.Fragment>
      // <>
      // <ErrorBoundry>
      //   <Item nameItem='dishdasha'/>
      // </ErrorBoundry>
      //   <ErrorBoundry>
      //   <Item nameItem='dress'/>
      // </ErrorBoundry>
      //   <ErrorBoundry>
      //   <Item nameItem='jacket'/>
      // </ErrorBoundry>
      // </>
      <>
      {/* <Provider value="hasan" >
      <ComponentC/>
      </Provider>
      <>
      <Lecture1 />
      <HoveredLecture1 />
      </> */}
      <GetPost></GetPost>
      </>
    )
  }
    
  }

export default App;