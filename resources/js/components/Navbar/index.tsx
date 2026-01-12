"use client"

import React from "react";
import Header from '../Header';

export default function Navbar() {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "topbar-wrapper sticky" : "topbar-wrapper";

  return (
    <div className={className}>
        <Header />
    </div>
  ); 
}