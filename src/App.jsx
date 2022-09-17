import React from "react";
import { Route, Routes } from "react-router-dom";

// MUI imports
import { Box } from "@mui/material";
// components Import
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
// styles import
import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
