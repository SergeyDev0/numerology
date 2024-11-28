import React from "react"
import Header from './../header/Header';
import Wheel from "../wheel/Wheel";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
};

export default Layout;
