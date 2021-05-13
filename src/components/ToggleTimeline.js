import React, { useState } from "react";

const ToggleTimeline = () => {
  const [toggled, setToggled] = useState(false);

  function openWindow() {
    window.location.assign("https://forms.gle/CSqLiC4tHKe7oskt6", "_blank");
  }

  function newLink() {
    let el = document.getElementById("test-timeline");

    setToggled(true);
    console.log("I was clicked");
    setTimeout(function () {
      openWindow();
      setTimeout(function () {
        el.checked = false;
        setToggled(false);
      }, 1000);
    }, 1000);
  }

  return (
    <div className="toggle">
      <input id="test-timeline" type="checkbox" onClick={newLink}></input>
      <span class="text-label">{toggled ? " " : "Register Here"}</span>
    </div>
  );
};

export default ToggleTimeline;
