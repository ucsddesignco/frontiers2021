import React, { useState } from "react";

const ToggleDark = () => {
  const [toggled, setToggled] = useState(false);

  function openWindow() {
    window.open("https://forms.gle/CSqLiC4tHKe7oskt6", "_blank");
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
    <div className="toggle-dark no-fastclick"  onClick={newLink}>
      <input id="test-dark" type="checkbox"></input>
      <span className="text-label-dark">{toggled ? " " : "Register Here"}</span>
    </div>
  );
};

export default ToggleDark;
