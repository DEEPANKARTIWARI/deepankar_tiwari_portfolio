import { Box, Button, Grid, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";

const Hero = () => {
  return (
    <Box height={"75vh"} bgcolor={"transparent"}>
      <Grid container p={3} alignItems={"center"}>
        <Grid item md={8} p={3}>
          <Typography variant="h5" color={"white"}>
            HI THERE.WELCOME TO MY PORTFOLIO.
          </Typography>
          <Typography variant="h3" color={"ghostwhite"}>
            I'm Deepankar Tiwari
          </Typography>
          <Typography color={"ghostwhite"} variant="h4">
            Software Developer
          </Typography>
          <Typography color={"ghostwhite"} variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            sapiente a optio inventore. Molestiae suscipit ullam, odio facere
            eveniet voluptate doloremque labore, libero, enim asperiores officia
            debitis exercitationem voluptatum nobis!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              display: "block",
            }}
          >
            <Typography display={"flex"} justifyItems={"center"}>
              <LinkIcon /> &nbsp;Connect Me
            </Typography>
          </Button>
        </Grid>
        <Grid item md={4}>
          <img src={require("./heroImg.png")} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
