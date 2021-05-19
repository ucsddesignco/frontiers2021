import React, { useState } from "react";

const Toggle = (props) => {
  const [toggled, setToggled] = useState(false);

  function openWindow() {
    let defaultUrl = "https://docs.google.com/document/d/1Xa3e5v2zAn_qTkScSHsZTnKJU-NBp2pi0ORi5yP3di4/edit?usp=sharing";

    if (props.href) {
      document.getElementById(props.href).scrollIntoView(true);
    } else {
      window.location.assign(defaultUrl, "_blank");
    }
  }

  function newLink(id) {
    let el = document.getElementById(id);

    setToggled(true);
    document.body.style.overflow = "visible";
    document.documentElement.style.overflow = "visible";

    setTimeout(function () {
      openWindow();

      if (!props.onChange) {
        setTimeout(function () {
          el.checked = false;
          setToggled(false);
        }, 1000);
      } else {
        props.onChange();
      }
    }, 1000);
  }

  return (
    <div className="toggle-brief">
      <input
        id={props.id}
        type="checkbox"
        onClick={() => {
          newLink(props.id);
        }}
      ></input>
      <span class="text-label-brief">
        {toggled ? " " : props.text || "Register Now"}
      </span>
    </div>
  );
};

export default Toggle;
