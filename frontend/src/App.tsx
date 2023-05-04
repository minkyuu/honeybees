import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RegisterMemberPage from './pages/RegisterMemberPage/RegisterMemberPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterMemberPage />} />
        <Route path="*" element={<ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  );
}
