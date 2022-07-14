import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, List, Typography } from "@mui/material";
function DrawerMenu(props) {
  const title = props.arr;

  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {title.map((page) => {
          return (
            <Typography
              sx={{
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {page}
            </Typography>
          );
        })}
      </Drawer>

      <IconButton>
        <MenuRoundedIcon />
      </IconButton>
    </div>
  );
}

export default DrawerMenu;
