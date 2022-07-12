import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import SkillsBg from "../images/skillbg.jpg";
const useStyles = makeStyles({
  skillsHeader: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "fantasy",
    fontWeight: "bolder",
    fontSize: 30,
    marginBottom: "2rem",
    marginTop: "2rem",
    textDecoration: "underline",
    color: "#eee",
  },
  skillsList: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "fantasy",
    fontSize: 20,
    marginBottom: 20,
    color: "#eee",
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <Card
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${SkillsBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        border: "2px solid",
        borderColor: "#e0e0e0",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Card sx={{ height: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#b4eedc",
            fontFamily: "fantasy",
            fontWeight: "bolder",
            fontSize: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35%",
          }}
        >
          Technical Skills
        </Typography>
        <Card
          elevation={17}
          style={{
            width: "60%",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "rgba(0,0,15,0.8)",
            borderRadius: 10,
            border: "2px solid",
            borderColor: "#0e0e0e",
          }}
        >
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
        </Card>
      </Card>
    </Card>
  );
}

export default Skills;
