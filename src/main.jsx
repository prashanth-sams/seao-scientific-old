import React, { Component } from 'react';
import logo from './logo.svg';
import './mystyle.css';
import NavMenu from './Nav/menu';
import NavLogo from './Nav/logo';
import BannerImage from './banner/bannerimg';
import ResearchTopic from './Research/research';



class Sajin extends Component {
  render() {
    return (
      <div>
      <div className="navdiv">
      <div>
        <div><NavLogo></NavLogo></div>
        <NavMenu></NavMenu>
        <BannerImage></BannerImage>
      </div>
      <div className="float70">Research & Development
      <ResearchTopic></ResearchTopic></div>
      <div className="floatrt30">Product</div>
      
      
      </div>
      </div>
       );
  }

}
export default Sajin;
