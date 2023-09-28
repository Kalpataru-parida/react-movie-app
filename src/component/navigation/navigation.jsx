import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useNavigate  } from "react-router-dom";

const style = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#39445a",
    color:"#50BAF3",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = style();
  const navigateTo = useNavigate ();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (value === 0) navigateTo("/");
    else if(value === 1) navigateTo("/Movies")
    else if(value === 2) navigateTo("/TVSeries")
    else if(value === 3) navigateTo("/Search")
  }, [value]);
  return (
    <Box>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
