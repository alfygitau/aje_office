import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Login from "./pages/login/Login";
import AdminLayout from "./layouts/AdminLayout";
import TopBar from "./topbar/TopBar";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/topbar" element={<TopBar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
