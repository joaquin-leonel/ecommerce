import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import Item from './components/Item/Item.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';  


function App() {
  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer/>
       

        <ItemDetailContainer/>

          <Footer/>
    </div>
  );
}

export default App;
