import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import gr1 from "../assets/images/gr-1.svg";
import gr2 from "../assets/images/gr-2.svg";
import gr3 from "../assets/images/gr-3.svg";
import Toggle from "./Toggle";
import DarkBanner from "../assets/images/dark-banner.png";

function Timeline() {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <img className="dark-banner" src={DarkBanner} />
      <div className="timeline-section">
        <h2 className="white-scrim">Timeline of Design Frontiers</h2>
        <Grid container>
          <Grid item sm={4} md={3}>
            <img src={gr1} className="gr-circles" alt="number-1" />
          </Grid>
          <Grid item sm={8} md={9}>
            <div class="timeline-details">
              <h2 class="timeline-title">Kickoff Event | Thursday, May 20</h2>
              <p class="timeline-p">
                Design Frontiers will start with a workshop from Fjord, and the
                brief will be released during this event. Students will then
                start designing with the given brief and continue iterating
                throughout the weekend.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} md={3}>
            <img src={gr2} className="gr-circles" alt="number-2" />
          </Grid>
          <Grid item sm={8} md={9}>
            <div class="timeline-details">
              <h2 class="timeline-title">
                Submissions Close | Sunday, May 23 at 11:59pm
              </h2>
              <p class="timeline-p">
                Students will turn in 1-minute presentation videos of their
                designs.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} md={3}>
            <img src={gr3} className="gr-circles" alt="number-3" />
          </Grid>
          <Grid item sm={8} md={9}>
            <div class="timeline-details">
              <h2 class="timeline-title">
                Judging, Feedback, Final Presentations | Thursday, May 27
              </h2>
              <p class="timeline-p">
                Fjord will review all presentation videos and decide on the
                winners.
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="toggle">
          <Toggle onChange={(event) => setToggled(event.target.checked)} />
          <span class="text-label">{toggled ? " " : "Register Here"}</span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
