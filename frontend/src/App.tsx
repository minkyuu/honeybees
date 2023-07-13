import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RegisterMemberPage from './pages/RegisterMemberPage/RegisterMemberPage';
import RegisterSuccessPage from './pages/RegisterSuccessPage/RegisterSuccessPage';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import MyPage from './pages/MyPage/MyPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import RecordPage from './pages/RecordPage/RecordPage';
import PostPage from './pages/PostPage/PostPage';


// test 페이지들
import Contribution from './components/Contribution/Contribution';
import Record from './components/Record/Record';
import MyActivity from './components/MyActivity/MyActivity';
import PostList from './components/PostList/PostList';
import EditUserPage from './pages/EditUserPage/EditUserPage';
import RecordModal from './components/Modal/RecordModal/RecordModal';
import PostModal from './components/Modal/PostModal/PostModal';
import SkeletonPost from './components/Skeleton/SkeletonPost';
import Calendar from './components/Calendar/Calendar';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterMemberPage />} />
      <Route path="/register-success" element={<RegisterSuccessPage />} />
      <Route path="/main" element={<MainPage />}>
        <Route path="" element={<ExplorePage />} />
        <Route path="my" element={<MyPage />} />
      </Route>
      <Route path=":nickname" element={<UserPage />} errorElement={<ErrorPage/>}>
        <Route path="" element={<RecordPage />}/>
        <Route path="post" element={<PostPage />}/>
      </Route>
      <Route path=":nickname/edit" element={<EditUserPage />} />

      <Route path="/error" element={<ErrorPage />} />

      {/* test 페이지 URL */}
      <Route path="/con" element={<Contribution nickname='tester1'/>} />
      <Route path="/act" element={<MyActivity nickname='tester1'/>} />
      <Route path="/modal" element={<RecordModal nickname='tester1' />} />
      <Route path="/postmodal" element={<PostModal />} />
      <Route path="/record" element={<Record onClick={() => {}}/>} />
      <Route path="/postlist" element={<PostList searchTag={''}/>} />
      <Route path="/sk" element={<SkeletonPost />} />      
      <Route path="/calendar" element={<Calendar/>} />
    </Routes>
  );
}
