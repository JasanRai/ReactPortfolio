import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  skillsHeader: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "fantasy",
    fontWeight: "bolder",
    fontSize: 30,
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  skillsList: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "fantasy",
    fontSize: 20,
    marginBottom: 5,
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 20 }}>
      <Typography
        variant="h2"
        sx={{
          color: "#000",
          fontFamily: "fantasy",
          fontWeight: "Bold",
          fontSize: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Technical Skills
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Typography className={classes.skillsHeader}>
            Programming Language
          </Typography>
          <Typography className={classes.skillsList}>HTML/CSS</Typography>
          <Typography className={classes.skillsList}>Express</Typography>
          <Typography className={classes.skillsList}>SQL</Typography>
          <Typography className={classes.skillsList}>Javascript</Typography>
          <Typography className={classes.skillsList}>MongoDB</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.skillsHeader}>
            Technology Tools
          </Typography>
          <Typography className={classes.skillsList}>ReactJS</Typography>
          <Typography className={classes.skillsList}>MaterialUI</Typography>
          <Typography className={classes.skillsList}>MongoAtlas</Typography>
          <Typography className={classes.skillsList}>NodeJS</Typography>
          <Typography className={classes.skillsList}>Axios</Typography>
          <Typography className={classes.skillsList}>Postman</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.skillsHeader}>Others</Typography>
          <Typography className={classes.skillsList}>Trello</Typography>
          <Typography className={classes.skillsList}>Slack</Typography>
          <Typography className={classes.skillsList}>Github</Typography>
          <Typography className={classes.skillsList}>VSCode</Typography>
          <Typography className={classes.skillsList}>Figma</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
