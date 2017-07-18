import React, { Component } from 'react';
import './App.css';
class Nav extends Component {
  render() {
    return (
         <div className="App">
         {/*导航部分
         	*/}
     	     <div className="lnanvc">
                 <ul>
                  <li><a href="JavaScript:;">首页</a></li>
                  <li><a href="JavaScript:;">师资力量</a></li>
                  <li><a href="JavaScript:;">校园资讯</a></li>
                  <li><a href="JavaScript:;">学校介绍</a></li>
                   <li><a href="JavaScript:;">在线报名</a></li>
                 </ul>
      	     </div>
          </div>
    );
  }
}

export default Nav;
