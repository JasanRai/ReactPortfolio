import { Box, Typography } from "@mui/material";
import React from "react";
import AvaImg from "../images/pngegg.png";

function Info() {
  return (
    <div>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box>
          <Typography>Jasan Kumar Rai</Typography>
          <Typography>
            Lorem Ipsum asdasdasdasdasdasdasdasdasdasdasdasdasdasdas
          </Typography>
        </Box>
        <Box>
          <img src={AvaImg} alt="Ava" />
        </Box>
      </Box>
    </div>
  );
}

export default Info;
