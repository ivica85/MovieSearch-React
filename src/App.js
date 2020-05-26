import React from "react";
import SearchMovie from './SearchMovie'



import Styles from "./App.module.css";

export default function App() {
  return (
    <div className={Styles.App}>
      <h1>Movie Database</h1>
      <SearchMovie />
    </div>
  );
}
