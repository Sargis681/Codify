import React from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
import HeaderContent from '../HeaderContent/HeaderContent';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import { useLocation } from 'react-router';

function Header() {
  let location =useLocation()
  console.log(location.pathname);
  const headerStyle = location.pathname === "/" ? { height: "100vh" } : { height: "auto" };
  
  return (
    <div className='Header' style={headerStyle}>
      {
        location.pathname === "/" ? <BackgroundVideo  /> : null
      }
      <Menu />
      {
        location.pathname === "/" ? <HeaderContent /> : null
      }
      
    </div>
  );
}

export default Header;
