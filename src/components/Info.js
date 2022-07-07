import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import AvaImg from "../images/pngegg.png";
import InfoVideo from "../videos/video.mp4";
function Info() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        src={InfoVideo}
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100vh", objectFit: "fill" }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "95%",
            height: "85vh",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                height: "100%",
                color: "#eee",
                fontFamily: "fantasy",
                fontWeight: "Bold",
                fontSize: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Introduction
            </Typography>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontFamily: "serif",
                      fontSize: 40,
                      color: "#fff",
                    }}
                  >
                    Hi, I'm Jasan
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontFamily: "serif",
                      fontSize: 30,
                      color: "#fff",
                    }}
                  >
                    Frontend Developer
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontFamily: "serif",
                      fontSize: 25,
                      color: "#fff",
                    }}
                  >
                    Graduate Level Experience in Web Development , Producing
                    High Quality Work
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src={AvaImg}
                    alt="Ava"
                    width={"50%"}
                    sx={{ color: "white" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Info;
