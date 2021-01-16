import logo from './logo.svg';
import './App.css';
import './App.css';
import Produit from './components/Produit';
import products from  './const/Const'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div  className="App-header">{
          products.map(produit => <Produit produit ={produit} /> )
        
      }</div>
        
      </header>
    </div>
  );
}

export default App;
