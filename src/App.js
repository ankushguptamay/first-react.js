
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import AddNotes from './components/Note/AddNotes';
import Home from './components/Note/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './Context/Notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title="Home" information="Information" />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/mynotes" element={<AddNotes />}></Route>
            <Route exact path='/signup' element={<SignUp />}></Route>
            <Route exact path='/login' element={<LogIn />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
