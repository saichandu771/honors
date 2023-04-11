import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";

import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Upload from "./components/Upload/Upload";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/logout"   element={<Logout />} />
          <Route path="/upload"   element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
