import React, { useState } from "react";

const ToggleDark = () => {
  const [toggled, setToggled] = useState(false);

  function openWindow() {
    window.location.assign("https://forms.gle/CSqLiC4tHKe7oskt6", "_blank");
  }

  function newLink() {
    let el = document.getElementById("test-dark");

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
    <div className="toggle-dark">
      <input id="test-dark" type="checkbox" onClick={newLink}></input>
      <span className="text-label-dark">{toggled ? " " : "Register Now"}</span>
    </div>
  );
};

export default ToggleDark;
