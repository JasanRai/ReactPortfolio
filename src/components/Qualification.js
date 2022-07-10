import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import GradImg from "../images/grad.png";
import CalliImg from "../images/calliQuali.png";

const useStyles = makeStyles({
  QualiHeader: {
    color: "#000",
    fontFamily: "fantasy",
    fontWeight: "Bold",
    fontSize: 60,
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
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#ffdad7",
    padding: "1rem",
    borderRadius: "20px",
  },
  GradStyle: {
    width: "12%",
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
  QualiCalli: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: " 30%",
    opacity: 0.8,
  },
});

function Qualification() {
  const classes = useStyles();
  return (
    <div
      style={{
        height: "1330px",
        width: "100%",
        backgroundColor: "#eee",
        border: "2px solid",
        borderColor: "#e0e0e0",
        borderRadius: "10px",
      }}
    >
      <Typography className={classes.QualiHeader}>Qualification</Typography>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.QualiBody}>
          <div>
            <Typography className={classes.QualiTitle}>
              Bachelors in Information Technology
            </Typography>
            <Typography className={classes.QualiDescr}>
              (Mobile Application Development)
            </Typography>
            <Typography className={classes.QualiDescr}>(2018-2021)</Typography>
          </div>
          <img src={GradImg} className={classes.GradStyle} />
        </div>
      </div>
      <div className={classes.QualiCalli}>
        <img src={CalliImg} />
      </div>
    </div>
  );
}

export default Qualification;
