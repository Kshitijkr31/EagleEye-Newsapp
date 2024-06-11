import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import News from "./components/news";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 15;

  const [progress, setProgress] = useState(0);

  // state = {
  //   progress: 0,
  // };

  // setProgress = (progress) => {
  //  setProgress(progress);
  // }

  const backgroundStyle = {
    backgroundImage:
      "url(https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const handleSetProgress = (progress) => {
    setProgress(progress);
  };


  return (
    <div style={backgroundStyle}>
      <Router>
        <Navbar />

        <LoadingBar color='#f11946' height={3} progress={progress} />

        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                setProgress={handleSetProgress}
                key='default'
                pageSize={pageSize}
                country='in'
                category='general'
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                setProgress={handleSetProgress}
                key='sports'
                pageSize={pageSize}
                country='in'
                category='sports'
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
                setProgress={handleSetProgress}
                key='business'
                pageSize={pageSize}
                country='in'
                category='business'
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                setProgress={handleSetProgress}
                key='entertainment'
                pageSize={pageSize}
                country='in'
                category='entertainment'
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={handleSetProgress}
                key='health'
                pageSize={pageSize}
                country='in'
                category='health'
              />
            }
          />
          <Route
            exact
            path='/science'
            element={
              <News
                setProgress={handleSetProgress}
                key='science'
                pageSize={pageSize}
                country='in'
                category='science'
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                setProgress={handleSetProgress}
                key='technology'
                pageSize={pageSize}
                country='in'
                category='technology'
              />
            }
          />
          <Route exact path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;