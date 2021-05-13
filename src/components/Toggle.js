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
    <div className="toggle">
      <input 
        id={props.id} 
        type="checkbox" 
        onClick={() => { newLink(props.id) }}
      ></input>
      <span class="text-label">
        {toggled ? " " : (props.text || "Register Now")}
      </span>
    </div>
  );
};

export default Toggle;
