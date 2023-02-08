import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionsPage from './pages/Missions';
import ProfilePage from './pages/Profile';
import RocketsPage from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<RocketsPage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}
export default App;
