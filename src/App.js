
import './App.css';
import AddProduct from './components/Product/AddProduct';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar title="Home" information="Information" />
      <Routes>
        <Route exact path="/add-products" element={<AddProduct />}></Route>
        <Route exact path="/" element={<Product price={20} />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/login' element={<LogIn />}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
