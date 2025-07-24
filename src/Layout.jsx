import React from 'react';
import Header from './components/header/header';
import Fotter1 from './components/Fotter1/Fotter1';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Header />
      <Outlet/>
      <Fotter1 />
    </>
  );
}

export default Layout;