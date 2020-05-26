import React, { useState } from "react";
import MovieCard from './MovieCard'
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "75%",
    },
  },
  button: {
    width: "70%",
  },
}));

const SearchMovie = () => {
  const classes = useStyles();
  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9c2889c21b3008c32801826be8a42adf&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={classes.root} onSubmit={searchMovies}>
        <TextField
          id="outlined-basic"
          label="Find Movie"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <br />
        <Button className={classes.button} variant="contained" type="submit">
          Search Movie
        </Button>
      </form>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id}  />
          
          ))}
      </Grid>
    </>
  );
};

export default SearchMovie;
