import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="bg-dark text-white text-center">{`Copyright © Alex ${year}`}</footer>;
};

export default Footer;