import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Herosection from './components/Herosection/Herosection';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Herosection></Herosection>
      <Shop></Shop>
      <h1 className='text-danger'>Lorem, ipsum.</h1>
    </div>
  );
}

export default App;

