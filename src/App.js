import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/NavBar';
import Carousel from './component/Carousel/Carousel';
import AboutPizza from './component/AboutPizza/AboutPizza';
import PizzaTypes from './component/PizzaTypes/PizzaTypes';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <AboutPizza/>
    <PizzaTypes/>
    <Footer/>
    </>
  );
}

export default App;
