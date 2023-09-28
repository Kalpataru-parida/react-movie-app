import Header from "./component/header/header";
import SimpleBottomNavigation from "./component/navigation/navigation";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Trending from "./component/pages/trending";
import Movies from "./component/pages/Movie";
import Series from "./component/pages/TvSeries";
import Search from "./component/pages/Search";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending/>} />
            <Route path="/Movies" element={<Movies/>} />
            <Route path="/TVSeries" element={<Series/>} />
            <Route path="/Search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
