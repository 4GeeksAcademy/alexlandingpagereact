import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Card />
        <br></br><br></br>
        <Footer />
      </div>
    );
  }
  
  export default App;