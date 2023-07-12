import './App.scss';
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const incomingData = data.map( item => {
    return (
      <Card 
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.ratingCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {incomingData}
    </div>
  );
}

export default App;