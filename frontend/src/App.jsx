import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/TimeTable" element={<TimeTable />}  />
      </Routes>
    </Router>
  );
}

export default App;
