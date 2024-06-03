import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import AdminLayout from "./layouts/AdminLayout";
import TopBar from "./topbar/TopBar";
import RequireAuth from "./layouts/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route element={<RequireAuth />}>
            <Route path="/admin/topbar" element={<TopBar />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
