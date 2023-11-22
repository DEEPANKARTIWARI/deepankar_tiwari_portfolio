import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
const Projects = () => {
  return (
    <Box color={"white"} p={3}>
      <Typography variant="h1">Projects</Typography>

      <Grid container m={2} p={5} gap={5}>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">Hire Wise</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">Sales View</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">Youtube Clone(View Tube)</Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={6}>
          <Paper>
            <Typography variant="body1">Hospital Management Web App</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
