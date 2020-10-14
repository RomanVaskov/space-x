import React from "react";
import "./main.css";

export default function Main() {
  return (
    <>
      <section className="main">
        <h1 className="title">Falcon 1</h1>
        <div className="video-container">
          <video
            className="video"
            autoPlay
            loop
            muted
            src="./video/moon.mp4"
          ></video>
        </div>
      </section>
    </>
  );
}
