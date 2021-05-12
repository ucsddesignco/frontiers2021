import React from "react";

function ActionLink() {
  function handleClick(e) {
    alert("Clicked");
    window.open("https://www.google.com/", "_blank");
  }
}

function Toggle() {
  return (
    <div class="toggle">
      {" "}
      {/* position: relative */}
      <input type="checkbox" name=""></input>
      <span class="text-label">
        {" "}
        {/* position: absolute */}
        Register Here
      </span>
    </div>
  );
}

export default Toggle;
