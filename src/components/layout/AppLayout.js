import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieForm from "../movieForm/MovieForm";
import MovieTextComponent from "../movieForm/TextComponent";

function AppLayout() {
  return (
    <div>
      <MovieForm />
      <hr />
      <MovieTextComponent />
    </div>
  );
}

export default AppLayout;
