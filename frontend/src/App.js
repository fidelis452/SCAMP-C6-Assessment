import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar/Topbar';
import Product from './Products/Product';
function App() {
  return (
    <div className="App">
       <Topbar />
       <div className="container"> 
      <Product />
       </div>
    </div>
  );
}

export default App;
