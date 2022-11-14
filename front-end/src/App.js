import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import DetailItem from './pages/DetailItem/DetailItem';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="detailitem" element={<DetailItem />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<div>404 Page</div>} />
    </Routes>
  );
}

export default App;