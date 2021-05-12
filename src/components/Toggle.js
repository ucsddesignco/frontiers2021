import React, { useState } from "react";

export default function Toggle(props) {
  function openWindow() {
    window.open("https://forms.gle/CSqLiC4tHKe7oskt6", "_blank");
  }

  function newLink() {
    console.log("I was clicked");
    setTimeout(function () {
      // openWindow();
      setTimeout(function () {
        props.setToggled(true);
      }, 1000);
    }, 1000);
  }

  return (
    <input type="checkbox" onChange={props.onChange} onClick={newLink}></input>
  );
}
