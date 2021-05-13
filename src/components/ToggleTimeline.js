import React, { useState } from "react";

const ToggleTimeline = () => {
  const [toggled, setToggled] = useState(false);

  function openWindow() {
    window.open("https://forms.gle/CSqLiC4tHKe7oskt6", "_blank");
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
    <label className="toggle no-fastclick" onClick={newLink}>
      <input id="test-timeline" type="checkbox"></input>
      <span class="text-label">{toggled ? " " : "Register Here"}</span>
    </label>
  );
};

export default ToggleTimeline;
