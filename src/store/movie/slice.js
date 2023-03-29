import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
