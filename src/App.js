import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data'
import './style.css'

function App() {
  const card = data.map(item => {
    return(
      <Card
      key={item.id}
      img={item.coverImg}
      status="SOLD OUT"
      rating={item.stats.rating}
      review={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      />
    )
  })
  return (
    <div className="App">
      < Navbar />
      <Hero />
      {card}
    </div>
  );
}

export default App;
