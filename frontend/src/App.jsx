import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
import Reserves from "./pages/Reserves";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/reservas" element={<Reserves />} />
      </Routes>
    </Router>
  );
}

export default App;
