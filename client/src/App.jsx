import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ListAllProfiles from './pages/ProfileList';
// import ListAllCenters from './pages/ProfileListCenters';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import PetDetailPage from './pages/PetDetailPage';
import PetCreationPage from './pages/PetCreationPage';
import PetEditPage from './pages/PetEditPage';
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
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/centers' element={<ListAllCenters />} /> */}
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/log-in' element={<LogInPage />} />
            <Route path='/profile/' element={<ListAllProfiles />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
            <Route path='/profile/edit' element={<ProfileEditPage />} />
            <Route path='/pet/:id' element={<PetDetailPage />} />
            <Route path='/pet/:id/edit' element={<PetEditPage />} />
            {/* <Route path='/pet/list' element={<PetListPage />} /> */}
            <Route path='/pet' element={<PetCreationPage />} />
            <Route path='/post/:id' element={<SinglePostPage />} />
            <Route path='/post' element={<CreatePostPage />} />
            <Route path='/post/:id/edit' element={<PostEditPage />} />
            <Route path='/message/list' element={<MessageThreadListPage />} />
            <Route path='/message/:id' element={<MessageThreadDetailPage />} />
            <Route path='*' element={'404 page'} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};
export default App;
