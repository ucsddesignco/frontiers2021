import React, { useState } from "react";

const Toggle = ({ onChange }) => {
  function openWindow() {
    window.open("https://forms.gle/CSqLiC4tHKe7oskt6", "_blank");
  }

  function newLink() {
    console.log("I was clicked");
    setTimeout(function () {
      openWindow();
    }, 1000);
    // this.state = false;
  }

  return <input type="checkbox" onChange={onChange} onClick={newLink}></input>;
};

export default Toggle;
