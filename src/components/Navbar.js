import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DrawerMenu from "./DrawerMenu";

const ResponsiveAppBar = () => {
  const pages = ["Introduction", "Skills", "Qualification", "Contact"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{
        border: "1px solid",
        borderColor: "#1667b7",
        borderRadius: "10px",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  // display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                JASAN
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ display: "flex", justifyContent: "end" }}>
              {isMatch ? (
                <>
                  <DrawerMenu arr={pages} />
                </>
              ) : (
                pages.map((page) => {
                  return (
                    <Typography
                      sx={{
                        marginRight: { lg: 13, md: 11 },
                        fontFamily: "cursive",
                        fontSize: { lg: 20, md: 19 },
                      }}
                    >
                      {page}
                    </Typography>
                  );
                })
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
