import { Card, CardMedia, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import QualiBG from "../images/qualibg.jpg";

const useStyles = makeStyles({
  QualiHeader: {
    color: "#f4f4f4",
    fontFamily: "fantasy",
    fontWeight: "Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35%",
  },
  QualiBody: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    height: "90%",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "rgba(100,255,255,0.7)",
    padding: "1rem",
    borderRadius: "20px",
  },
  GradStyle: {
    width: "12%",
    backgroundColor: "",
  },
  QualiTitle: {
    fontFamily: "fantasy",
    fontWeight: "bolder",
    fontSize: 40,
    marginBottom: "2rem",
    marginTop: "2rem",
    textDecoration: "underline",
  },
  QualiDescr: {
    fontFamily: "fantasy",
    fontWeight: "bolder",
    fontSize: 30,
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  //   QualiCalli: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     height: " 30%",
  //     opacity: 0.8,
  //   },
});

function Qualification() {
  const classes = useStyles();
  const academic = [
    {
      name: "Bachelors in Information Technology",
      course: "(Mobile Application Development)",
      institute: "Academy of Information Technology",
      yearCompleted: "2021",
    },
    {
      name: "A Levels",
      institute: "British Council",
      yearCompleted: "2017",
    },
  ];

  return (
    <Card
      style={{
        height: "100vh",
        width: "100%",
        border: "2px solid",
        borderColor: "#e0e0e0",
        borderRadius: "10px",
        backgroundImage: `url(${QualiBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card sx={{ height: "100%", background: "rgba(255,255,255,0)" }}>
        <Typography
          className={classes.QualiHeader}
          sx={{ fontSize: { xl: 60, lg: 55, md: 45, sm: 35, xs: 30 } }}
        >
          Qualification
        </Typography>

        <div
          style={{
            height: "60%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: { lg: "70%", md: "80%", sm: "90%", xs: "100%" },
              height: "90%",
              background: "rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "fantasy",
                  fontSize: { xl: 35, lg: 32, md: 30, sm: 28, xs: 25 },
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  height: "10%",
                  alignItems: "center",
                  color: "#eee",
                }}
              >
                Education
              </Typography>
              {academic.map((aca) => {
                return (
                  <Box
                    sx={{
                      height: "40%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Card
                      sx={{
                        height: "90%",
                        width: {
                          xl: "40%",
                          lg: "50%",
                          md: "60%",
                          sm: "70%",
                          xs: "80%",
                        },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(204,50,105,0.9)",
                      }}
                      elevation={20}
                    >
                      <Box>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: "fantasy",
                            fontWeight: "bolder",
                            fontSize: { lg: 24, md: 21, sm: 18, xs: 14 },
                            textDecoration: "underline",
                          }}
                        >
                          {aca.name}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: "fantasy",
                            fontWeight: "bolder",
                            fontSize: { lg: 20, md: 18, sm: 16, xs: 13 },
                          }}
                        >
                          {aca.course}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: "fantasy",
                            fontSize: { lg: 18, md: 16, sm: 13, xs: 11 },
                          }}
                        >
                          {aca.institute}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: "fantasy",
                            fontSize: { lg: 18, md: 16, sm: 13, xs: 11 },
                          }}
                        >
                          {aca.yearCompleted}
                        </Typography>
                      </Box>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          </Card>
          {/* <Card className={classes.QualiBody}>
            <Card
              elevation={24}
              sx={{
                backgroundColor: "rgba(100,255,255,0.9)",
                height: "70%",
              }}
            >
              <Card
                sx={{
                  padding: 8,
                  height: "100%",
                  background: "rgba(100,255,255,0)",
                }}
              >
                <Typography className={classes.QualiTitle}>
                  Bachelors in Information Technology
                </Typography>
                <Typography className={classes.QualiDescr}>
                  (Mobile Application Development)
                </Typography>
                <Typography className={classes.QualiDescr}>
                  (2018-2021)
                </Typography>
              </Card>
            </Card>
            <CardMedia
              component="img"
              src={GradImg}
              className={classes.GradStyle}
            />
          </Card> */}
        </div>

        {/* <div className={classes.QualiCalli}>
        <img src={CalliImg} />
      </div> */}
      </Card>
    </Card>
  );
}

export default Qualification;
