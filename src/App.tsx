import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='body'>
      <Header />
      <Banner/>
      {/* <Login /> */}
      <Footer/>
    </div>
  );
}

export default App;
