import React, { useEffect, useState } from "react";
import { TextField, Button, Tabs, Tab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchContent } from "../../services/Search.service";
import Cards from "../../component/cards/cards";

const searchFieldStyle = {
  position: "fixed",
  marginLeft: 350,
};
const myComponentStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

function Search() {
  const [type, setType] = useState(0);
  const [content, setContent] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchSearchField = searchContent(type, searchField);
    fetchSearchField.then((value) => {
      // if (value?.data) {
      //   const genresId = value?.data.map((e)=>{
      //     return e.id;
      //   })
      setContent(value?.data);
    });
  }, [type]);
  return (
    <div>
      <div style={searchFieldStyle}>
        <TextField
          style={{ flex: 1, height: 100, width: 400 }}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Button
          Onclick={searchContent(type, searchField)}
          variant="contained"
          style={{ marginLeft: 10, height: 55, width: 100 }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
      <div style={{ position: "fixed", marginTop: 110, marginLeft: 450 }}>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
          onChange={(event, newValue) => {
            setType(newValue);
          }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
        <div style={myComponentStyle}>
          {content &&
            content.map((ele) => (
              <Cards
                key={ele.id}
                id={ele.id}
                poster={ele.poster_path}
                title={ele.title || ele.name}
                date={ele.first_air_date || ele.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={ele.vote_average}
              />
            ))}
          {searchField &&
            !content &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
      </div>
    </div>
  );
}

export default Search;
