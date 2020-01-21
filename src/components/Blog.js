import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Nav from "./Nav";

export default function Blog() {
  return (
    <div>
      <Nav />
      <Grid container>
        <Grid item xs={12}>
          <img
            src="https://i.ytimg.com/vi/M2SVhN-rjiE/maxresdefault.jpg"
            alt="img"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">Header</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Body</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
