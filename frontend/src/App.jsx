import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
import DetailPage from "./pages/Detailpage";
import { Reserves } from "./pages/Reserves";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/timeTable" element={<TimeTable />} />
        <Route path="/detail/:title" element={<DetailPage />} />
        <Route path="/reservas" element={<Reserves />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;

