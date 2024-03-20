import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Login from "./pages/Login";
=======
import DetailPage from "./pages/Detailpage";
=======
import { Reserves } from "./pages/Reserves";
>>>>>>> origin/header
=======
import DetailPage from "./pages/Detailpage";
import { Reserves } from "./pages/Reserves";
>>>>>>> origin/homepage

>>>>>>> origin/homepage
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/homepage
        <Route path="/TimeTable" element={<TimeTable />}  />
<<<<<<< HEAD
        <Route path="/Login" element={<Login />}  />

=======
        <Route path="/detail/:title" element={<DetailPage/>}/>
<<<<<<< HEAD
>>>>>>> origin/homepage
=======
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/reservas" element={<Reserves />} />
>>>>>>> origin/header
=======
        <Route path="/reservas" element={<Reserves />} />
>>>>>>> origin/homepage
      </Routes>
    </Router>
  );
}

export default App;
