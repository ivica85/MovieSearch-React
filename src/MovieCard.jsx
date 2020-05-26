import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "75%",
      },
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "center",
      backgroundColor: "#e8eaf6",
    },
    gridItem: {
      margin: " 0 15%",
    },
  }));

const MovieCard = ({movie}) => {
    const classes = useStyles();

  return (
    <Grid item xs={12}  className={classes.gridItem}>
      <Paper className={classes.paper}>
        <p>ID: {movie.id}</p>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
        <h3>{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p>{movie.overview}</p>
      </Paper>
    </Grid>
  );
};

export default MovieCard;
