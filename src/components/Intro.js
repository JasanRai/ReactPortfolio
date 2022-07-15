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
                fontSize: { xl: 60, lg: 55, md: 45, sm: 35, xs: 30 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Introduction
            </Typography>
          </Box>
          <Card
            sx={{
              backgroundColor: "rgba(86,190,255,0.7)",
              // width: "80%",
              height: { md: "35%", xs: "40%" },
              marginRight: "auto",
              marginLeft: "auto",
              padding: "3rem",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                display: { sm: "flex", xs: "block" },
                alignItems: { sm: "center", xs: "center" },

                transform: { sm: "rotate(0)", xs: "rotate(180deg)" },
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: { xs: "auto" },
                  marginRight: { xs: "auto" },
                  transform: { sm: "rotate(0)", xs: "rotate(180deg)" },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontFamily: "serif",
                      fontSize: { xl: 40, lg: 36, md: 33, sm: 30, xs: 20 },
                      color: "#fff",
                    }}
                  >
                    Hi, I'm Jasan
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontFamily: "serif",
                      fontSize: { xl: 30, lg: 26, md: 23, sm: 20, xs: 15 },
                      color: "#fff",
                    }}
                  >
                    Frontend Developer
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontFamily: "serif",
                      fontSize: { xl: 25, lg: 21, md: 18, sm: 15, xs: 10 },
                      color: "#fff",
                    }}
                  >
                    Graduate Level Experience in Web Development , Producing
                    High Quality Work
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginLeft: { xs: "auto" },
                  marginRight: { xs: "auto" },
                  transform: { sm: "rotate(0)", xs: "rotate(180deg)" },
                }}
              >
                <Card
                  elevation={14}
                  sx={
                    {
                      // maxWidth: "300px",
                      // maxHeight: "400px",
                    }
                  }
                >
                  <CardMedia
                    component="img"
                    image={AvaImg}
                    alt="Profile"
                    sx={{ maxWidth: "300px", maxHeight: "300px" }}
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
