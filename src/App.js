import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider>

    <div className="App">
     <AppRouter/>
    </div>
    
    </CartProvider>
  );
}

export default App;
