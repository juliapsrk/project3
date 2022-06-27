import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ListAllProfiles from './pages/ProfileList';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import SinglePostPage from './pages/SinglePostPage';
import CreatePostPage from './pages/CreatePostPage';
import PostEditPage from './pages/PostEditPage';
import MessageThreadDetailPage from './pages/MessageThreadDetailPage';
import MessageThreadListPage from './pages/MessageThreadListPage';

import Header from './components/Header';
import PageWrapper from './assets/wrappers/PageWrapper';
import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/log-in" element={<LogInPage />} />
            <Route path="/profile/" element={<ListAllProfiles />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
            <Route path="/post" element={<CreatePostPage />} />
            <Route path="/post/:id/edit" element={<PostEditPage />} />
            <Route path="/message/list" element={<MessageThreadListPage />} />
            <Route path="/message/:id" element={<MessageThreadDetailPage />} />
            <Route path="*" element={'404 page'} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};

export default App;
