import React, { useState } from "react";

const Toggle = props => {
  const [toggled, setToggled] = useState(false);

  function openWindow() {
    let defaultUrl = "https://forms.gle/CSqLiC4tHKe7oskt6"; 

    if (props.href) {
      document.getElementById(props.href).scrollIntoView(true);
    } else {
      window.open(defaultUrl, "_blank");
    }
  }

  function newLink() {
    let el = document.getElementById("test");

    setToggled(true);
    document.body.style.overflow = "visible";
    document.documentElement.style.overflow = "visible";

    console.log("I was clicked");
    setTimeout(function () {
      openWindow();

      if (!props.onChange()) {
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
    <div className="toggle">
      <input id="test" type="checkbox" onClick={newLink}></input>
      <span class="text-label">
        {toggled ? " " : (props.text || "Register Now")}
      </span>
    </div>
  );
};

export default Toggle;
