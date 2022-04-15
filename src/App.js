import './App.css';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Portal from './components/Portal';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <Speakers/>
      <Portal/>
      <Upcoming/>
      <Footer/>
    </div>
  );
}

export default App;
