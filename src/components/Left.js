import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Left() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "rgb(214, 101, 101)",
          width: "10vw",
          height: "100vh",
        }}
      >
        <Link to="/page2">page2</Link>
        <Link to="/page3">page3</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
