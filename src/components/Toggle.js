import React from "react";

const Toggle = ({ onChange }) => {
  function openWindow() {
    window.open("https://ucsddesign.co/", "_blank");
  }

  function newLink() {
    console.log("I was clicked");
    setTimeout(function () {
      openWindow();
    }, 1250);
  }

  return <input type="checkbox" onChange={onChange} onClick={newLink}></input>;
};

export default Toggle;
