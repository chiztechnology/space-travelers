import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReduer from './rockets/rocketSlice';

const rootReducer = {
  missions: missionsReducer,
  rockets: rocketsReduer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
