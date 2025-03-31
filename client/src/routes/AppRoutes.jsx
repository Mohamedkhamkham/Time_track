import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CheckIn from '../pages/CheckIn';
import Calendar from '../pages/Calendar';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/check-in" element={<CheckIn />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
