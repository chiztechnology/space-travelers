import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MissionsPage from './pages/Missions';
import ProfilePage from './pages/Profile';
import RocketsPage from './pages/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route index element={<RocketsPage />} />
          <Route path="/rockets" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Provider>
    </div>
  );
}
export default App;
