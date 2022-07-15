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

    marginBottom: "2rem",
    marginTop: "2rem",
    textDecoration: "underline",
    color: "#eee",
  },
  skillsList: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "fantasy",
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
            fontSize: { xl: 60, lg: 55, md: 45, sm: 35, xs: 30 },
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
          sx={{
            width: { lg: "60%", md: "70%", sm: "80%", xs: "100%" },
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
              <Typography
                className={classes.skillsHeader}
                sx={{
                  fontSize: { xl: 30, lg: 25, md: 21, sm: 18, xs: 16 },
                }}
              >
                Language
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{
                  fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 },
                }}
              >
                HTML/CSS
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Express
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                SQL
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Javascript
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                MongoDB
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                className={classes.skillsHeader}
                sx={{
                  fontSize: { xl: 30, lg: 25, md: 21, sm: 18, xs: 16 },
                }}
              >
                Tools
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                ReactJS
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                MaterialUI
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                MongoAtlas
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                NodeJS
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Axios
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Postman
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                className={classes.skillsHeader}
                sx={{ fontSize: { xl: 30, lg: 25, md: 21, sm: 18, xs: 16 } }}
              >
                Others
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Trello
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Slack
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Github
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                VSCode
              </Typography>
              <Typography
                className={classes.skillsList}
                sx={{ fontSize: { xl: 20, lg: 18, md: 15, sm: 14, xs: 13 } }}
              >
                Figma
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Card>
    </Card>
  );
}

export default Skills;
