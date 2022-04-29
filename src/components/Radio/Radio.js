<<<<<<< HEAD
import React, { useState } from "react";
import { useEffect } from "react";
import { getRequest } from "../../utils/HttpRequest";
=======
import React from "react";
>>>>>>> 89497e65d25d82b9f46008935f197c9c413a676f
import Channels from "../Channel/Channels";

import "./Radio.scss";

export default function Radio() {
  const radio = [1, 2, 3, 4];
  const isPlaying = false;

 useEffect(() => {
  getRequest(setRadio);
  console.log(radio);
 }, [])
 
  // import getRequest func and fetch radio data

  const footer = (isPlaying) => {
    return isPlaying ? (
      <div>
        <span id="playing-text">CURRENTLY PLAYING</span>
        <div className="">{null}</div> {/*channel name*/}
      </div>
    ) : (
      <div>
        <span id="playing-text">NOTHING PLAYING</span>
      </div>
    );
  };
  return (
    <div className="main">
      <header className="radio_header">
        <span>STATIONS</span>
      </header>
      <section className="channel_list">
        {/* map Channel comp. with radio data */}
        {radio?.map((channel, index) => {
          return <Channels channel = {channel} setIsPlaying={setIsPlaying} key={index} />;
        })}
      </section>
      <footer>{footer(isPlaying)}</footer>
    </div>
  );
}
