import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
<<<<<<< HEAD
<<<<<<< HEAD
import Login from "./pages/Login";
=======
import DetailPage from "./pages/Detailpage";
=======
import { Reserves } from "./pages/Reserves";
>>>>>>> origin/header

>>>>>>> origin/homepage
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
        <Route path="/TimeTable" element={<TimeTable />}  />
<<<<<<< HEAD
        <Route path="/Login" element={<Login />}  />

=======
        <Route path="/detail/:title" element={<DetailPage/>}/>
>>>>>>> origin/homepage
=======
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/reservas" element={<Reserves />} />
>>>>>>> origin/header
      </Routes>
    </Router>
  );
}

export default App;
