import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import AvaImg from "../images/Profile.jpeg";
import InfoVideo from "../videos/video.mp4";
function Info() {
  return (
    <Card
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid",
        borderColor: "#e0e0e0",
        borderRadius: "10px",
      }}
    >
      <video
        src={InfoVideo}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "fill",
          borderRadius: "10px",
        }}
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
            height: "100vh",
          }}
        >
          <Box sx={{ height: "30%" }}>
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
          </Box>
          <Card
            style={{
              backgroundColor: "rgba(86,190,255,0.7)",
              // width: "80%",
              // height: "40%",
              marginRight: "auto",
              marginLeft: "auto",
              padding: "3rem",
              borderRadius: 10,
            }}
          >
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
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                <Card
                  elevation={14}
                  sx={{
                    width: "80%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={AvaImg}
                    alt="Profile"
                    sx={{ maxHeight: "500px" }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </div>
    </Card>
  );
}

export default Info;
