import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Sidebar from './components/SideDrawer/Sidedrawer'
import Backdrop from './components/Backdrop/Backdrop'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello  from './view/welcome'
import backdrop from './components/Backdrop/Backdrop';

class  App extends Component {
  state={
    sideDrawerOpen:false
  }

  drawerClick=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }
  drawerClose=()=>{
    this.setState(()=>{
      return {sideDrawerOpen:false}
    })
  }
  render(){
    // let sideDrawer;
    let backDrop ;
    if(this.state.sideDrawerOpen){
      
      backDrop=<Backdrop click={this.drawerClose}/>
    }
 
  return (
    <div style={{hight:"100%"}}>
      {/* <Router>
        Hello World
        <Route path="/" component={Hello} />
      </Router> */}
      <Toolbar drawerClick={this.drawerClick}/>
      <Sidebar show={this.state.sideDrawerOpen}/>
      {backDrop}
     
      {/* <main style={{marginTop:"64px"}}> 
      <p>this is page content</p>
      
      </main> */}
     
    </div>
  );
}
}

export default App;
