import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
<<<<<<< HEAD
import Login from "./pages/Login";
=======
import DetailPage from "./pages/Detailpage";

>>>>>>> origin/homepage
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TimeTable" element={<TimeTable />}  />
<<<<<<< HEAD
        <Route path="/Login" element={<Login />}  />

=======
        <Route path="/detail/:title" element={<DetailPage/>}/>
>>>>>>> origin/homepage
      </Routes>
    </Router>
  );
}

export default App;
