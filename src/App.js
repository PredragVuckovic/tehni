import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import ListUsers from "./pages/ListUsers";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/ListUsers" element={<ListUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
