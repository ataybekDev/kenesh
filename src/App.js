
import './App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import { Routes,Route} from 'react-router-dom';
import Donald from './components/pages/Donald';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
        <Routes>
         <Route path='/donald' element={<Donald/>}/>
         <Route path='/' element={<Hero/>}/>
       </Routes>
      <Footer/>
    </>
  );
}

export default App;
