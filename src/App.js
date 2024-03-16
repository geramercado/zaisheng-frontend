import logo from './logo.svg';
import './App.css';
import Slider from "./slider";

const items = [
  <div key="1" className="slider-div flex items-center justify-center">
    Div 1
  </div>,
  <div key="2" className="slider-div">
    Div 2
  </div>,
  <div key="3" className="slider-div">
    Div 3
  </div>,
];

function App() {
  return (
    <div className="App">
       <Slider items={items} />
    </div>
  );
}

export default App;
