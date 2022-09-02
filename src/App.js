import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
// import katieZaferes from "../src/images/katie-zaferes.png"
import data from "./data"

export default function App() {
const cards = data.map(item => {
  return (
    <Card
      key={item.id}
      item={item} /* YOU CAN ALSO USE {...item} BUT MUST REMOVE .item ON Card COMPONENT */
    />
  )
})

return (
  <div>
    <Navbar/>
    <Hero/>
    <section className="cards-list">
      {cards}
    </section>
  </div>
)}

/* YOU CAN ALSO USE THIS INSTEAD OF item={item} 
  BUT MUST REMOVE .item ON Card COMPONENT */
// img={`/images/${item.coverImg}`}
// img_alt=""
// rating={item.stats.rating}
// reviewCount={item.stats.reviewCount}
// location={item.location}
// title={item.title}
// price={item.price}
// openSpots={item.openSpots}