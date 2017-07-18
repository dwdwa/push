import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Matter from './Matter'
class App extends Component {
  render() {
    return (
      <div className="App">
     	 <div className="body">
     	{/*header*/}
        	<div className="lheader">
        	        <Header/>
        	</div>
        	{/*导航部分*/}
       		<div className="lnav"> 	
       			    <Nav/>
       	  </div>
       	  {/*内容部分*/}
       	  {/*banner部分*/}
       	  <div className="banner"></div>
       	  <div className="lcontent">
       	  <Matter/>
       	  </div>
       	  {/*footer部分*/}
       	  <div className="lfooter">
       	  <Footer/>
       	  </div>
      	</div>
      </div>
    ); 
  }
}

export default App;
