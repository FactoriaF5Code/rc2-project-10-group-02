import "./App.css";
import Router from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/detail/:title" element={<DetailPage />} />
        <Route path="/reservas" element={<Reserves />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
