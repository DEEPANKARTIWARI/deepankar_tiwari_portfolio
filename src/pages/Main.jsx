import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import { Box } from "@mui/material";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <Box width={"100%"}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Main;
