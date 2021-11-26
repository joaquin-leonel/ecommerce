import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import Product from './components/Product/Product.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer/>
       
          <Footer/>
    </div>
  );
}

export default App;
