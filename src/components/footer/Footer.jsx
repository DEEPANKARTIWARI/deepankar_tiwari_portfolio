import { Divider, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography color={"white"} textAlign={"center"}>
        Copyright &copy; 2023.Developed with
        <FontAwesomeIcon icon={icon({ name: "twitter", style: "brands" })} />
        by Deepankar Tiwari.
      </Typography>
    </footer>
  );
};

export default Footer;
