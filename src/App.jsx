import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
 

  return (
    <>
      <NavBar />
      <Hero />
      <Card Heading={
        <h2>Heading</h2>
      } Content={
        <p>A paragraph for some content</p>
      } Button={
        <button>Learn more</button>
      }/>
    </>
  )
}

export default App
