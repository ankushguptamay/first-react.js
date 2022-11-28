
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import MyNotes from './components/Note/MyNotes';
import Notes from './components/Note/Notes';
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
        <Route exact path="/" element={<Notes />}></Route>
        <Route exact path="/mynotes" element={<MyNotes />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/login' element={<LogIn />}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
