import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <Box color={"white"} p={3}>
      <Typography variant="h1">Skills</Typography>
      <Typography variant="h4">Professional Skills</Typography>
      <Grid container m={2} p={5} gap={5}>
        <Grid item md={2} xs={6}>
          <Paper>
            <Typography variant="body1">Communication</Typography>
          </Paper>
        </Grid>
        <Grid item md={2} xs={6}>
          <Paper>
            <Typography variant="body1">Teamwork</Typography>
          </Paper>
        </Grid>
        <Grid item md={2} xs={6}>
          <Paper>
            <Typography variant="body1">Problem Solving</Typography>
          </Paper>
        </Grid>
        <Grid item md={2} xs={6}>
          <Paper>
            <Typography variant="body1">Creativity</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h4">Technical Skills</Typography>
      <Grid container m={2} p={5} gap={5}>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">HTML</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">CSS</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">JAVASCRIPT</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">MONGODB</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">Skills</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
