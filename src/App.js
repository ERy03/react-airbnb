import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data'
import './style.css'

function App() {
  const cards = data.map(item => {
    return(
      <Card
      key={item.id}
      item={item} // we can use spread as well -> {...item}
      />
    )
  })
  return (
    <div className="App">
      < Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
