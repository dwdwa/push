import React, { Component } from 'react';
import './App.css';
class Header extends Component {
  render() {
    return (
      <div className="lheaderc">
        {/*头部中间左边部分*/}
        <div className="lheadercl">
        <b>School <span>Design</span></b>
        </div>
        <div className="lheadercr">
        <div className="lspan"><span>全国招生热线</span></div> 
       <div className="lp"><p><b>020-00000000</b></p></div>
        </div>
      </div>
    );
  }
}

export default Header;
