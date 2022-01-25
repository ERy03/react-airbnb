import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './style.css'

function App() {
  return (
    <div className="App">
      < Navbar />
      {/* <Hero /> */}
      <Card
      img="katie-zaferes.png"
      rating={5.0}
      review={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
      />
    </div>
  );
}

export default App;
