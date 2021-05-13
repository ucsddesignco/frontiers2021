import React from "react";
import gr1 from "../assets/images/gr-1.svg";
import gr2 from "../assets/images/gr-2.svg";
import gr3 from "../assets/images/gr-3.svg";
import ToggleTimeline from "./ToggleTimeline";

function Timeline() {
  return (
    <div id="timeline">
      <div className="timeline-section">
        <h2 className="white-scrim">Timeline of Design Frontiers</h2>
        <div className="timeline-item">
          <img src={gr1} className="gr-circles" alt="number-1" />
          <div class="timeline-details">
            <h2 class="timeline-title">Kickoff Event | Thursday, May 20</h2>
            <p class="timeline-p">
              Design Frontiers will start with a workshop from Fjord, and the
              brief will be released during this event. Students will then start
              designing with the given brief and continue iterating throughout
              the weekend.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <img src={gr2} className="gr-circles" alt="number-1" />
          <div class="timeline-details">
            <h2 class="timeline-title">
              Submissions Close | Sunday, May 23 at 11:59pm
            </h2>
            <p class="timeline-p">
              Teams will put their finishing touches on their prototypes and
              submit a 1-minute video presentation of their designs.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <img src={gr3} className="gr-circles" alt="number-1" />
          <div class="timeline-details">
            <h2 class="timeline-title">
              Judging, Feedback, Final Presentations | Thursday, May 27
            </h2>
            <p class="timeline-p">
              Fjord will review each team's presentation and cast their votes
              for the top 3 teams. The winning teams will receive prizes!
            </p>
          </div>
        </div>
        <ToggleTimeline />
      </div>
    </div>
  );
}

export default Timeline;
