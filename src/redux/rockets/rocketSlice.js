import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const FETCH = 'rockets/FETCH';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk(FETCH, async () => {
  const rockets = await api.get('/rockets');
  console.log(rockets);
  return rockets.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickrImage: rocket.flickr_images[0],
    description: rocket.description,
    reserved: false,
  }));
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserved(state, action) {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      return { ...state, rockets };
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => {
      const currState = state;
      currState.rockets = action.payload;
    },
  },
});

export const { rocketReserved } = rocketsSlice.actions;
export default rocketsSlice.reducer;
