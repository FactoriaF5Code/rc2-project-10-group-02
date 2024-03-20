import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TimeTable" element={<TimeTable />}  />
        <Route path="/Login" element={<Login />}  />

      </Routes>
    </Router>
  );
}

export default App;
