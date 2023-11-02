import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

import Auth from '../routes/Auth';
import Feed from '../routes/Feed';
import Explore from '../routes/Explore';
import Search from '../routes/Search';
import Profile from '../routes/Profile';
//import Settings from '../routes/Settings';

const AppRouter = ({ isLoggedIn }) => (
  <Routes>
    <Route path="/" element={isLoggedIn ? <Feed /> : <Auth />} />
    <Route path="/explore" element={isLoggedIn ? <Explore /> : <Auth />} />
    <Route path="/search" element={isLoggedIn ? <Search /> : <Auth />} />
    <Route path="/profile/:userName" element={isLoggedIn ? <Profile /> : <Auth />} />
    <Route path="*" element={isLoggedIn ? <Feed /> : <Auth />} />
  </Routes>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
