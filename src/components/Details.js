import React from "react";
import { Grid } from "@material-ui/core";
import ToggleDark from "./ToggleDark";

function Details() {
  return (
    <div id="details">
      <div className="details-container">
        <Grid container>
          <Grid item sm={12} md={6} className="details-info">
            <h2>Who can participate?</h2>
            <p>
              Registration is open to the public, but we will give priority to
              UCSD students.
            </p>
          </Grid>
          <Grid item sm={12} md={6} className="details-info">
            <h2>How big can my team be?</h2>
            <p>
              Teams can be a min of 2 and a max of 4. Teams will not be
              assigned, so feel free to make your own or join one on Design Co’s
              Discord channel.
            </p>
          </Grid>
          <Grid item sm={12} md={6} className="details-info">
            <h2>How long is Design Frontiers?</h2>
            <p>
              Design Frontiers is 4 days long and will be held on May 20 - May
              23, 2021.
            </p>
          </Grid>
          <Grid item sm={12} md={6} className="details-info">
            <h2>When is the deadline to register?</h2>
            <p>Wednesday, May 19 at 11:59PM PDT</p>
          </Grid>
        </Grid>
        <ToggleDark />
      </div>
    </div>
  );
}

export default Details;
