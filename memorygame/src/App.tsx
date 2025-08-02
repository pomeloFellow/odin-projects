import './App.css'
import images from './components/images'
import Card from './components/Card'
import CardContainer from './components/CardContainer';

function App() {

  function test(){
    console.log('Works');
  }

  function clicked(){
    console.log('Already clicked');
  }

  return (
    // <Card name={images[0].name} image={images[0].image} resetFunc={clicked} updateScoreFunc={test}/>
    <CardContainer images={images} resetFunc={clicked} updateScoreFunc={test}/>
  )
}

export default App
