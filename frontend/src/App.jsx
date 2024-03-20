import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";
import { Homepage } from "./pages/Homepage";
import DetailPage from "./pages/Detailpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TimeTable" element={<TimeTable />}  />
        <Route path="/detail/:title" element={<DetailPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
