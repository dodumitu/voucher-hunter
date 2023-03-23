import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import request from './api/request';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import DetailItem from './pages/DetailItem/DetailItem';
import Profile from './pages/Profile/Profile';
import AdminListItems from './pages/AdminItem/AdminListItems';
import AdminAddItem from './pages/AdminAddItem/AdminAddItem';
import AdminUpdateItem from './pages/AdminUpdateItem/AdminUpdateItem';
import AdminNews from './pages/AdminNews/AdminNews';
import AdminAddNews from './pages/AdminAddNews/AdminAddNews';
import News from './pages/News/News';
import DetailNews from './pages/DetailNews/DetailNews';

export const AuthContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({
    status: 'idle',
    data: null,
  });

  const verifyUserInfo = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUserInfo({ status: 'success', data: null });
      return;
    }

    try {
      const res = await request.get('/user/profile');
      if (res.success) {
        setUserInfo({ status: 'success', data: res.data });
      } else {
        setUserInfo({ status: 'success', data: null });
      }
    } catch (err) {
      setUserInfo({ status: 'success', data: null });
    }
  }

  const login = ({ token, returnUrl }) => {
    localStorage.setItem('token', token);
    window.location.href = returnUrl || '/';
  }

  const logout = () => {
    localStorage.removeItem('token');
    setUserInfo({ status: 'success', data: null });
  }

  useEffect(() => {
    verifyUserInfo();
  }, []);

  return (
    <div className="app">
      <AuthContext.Provider value={{ user: userInfo.data, login, logout }}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="detailitem" element={<DetailItem />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin/items" element={<AdminListItems />} />
          <Route path="admin/add-item" element={<AdminAddItem />} />
          <Route path="admin/update-item" element={<AdminUpdateItem />} />
          <Route path="admin/news" element={<AdminNews />} />
          <Route path="admin/add-news" element={<AdminAddNews />} />
          <Route path="news" element={<News />} />
          <Route path="detailnews" element={<DetailNews />} />
          <Route path="*" element={<div>404 Page</div>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;