import React, { useState } from "react";
import "./Channel.scss";

const Channels = ({channel, setIsPlaying}) => {
  const [showImage, setShowImage] = useState(false);

  const withImage = () => {
    return (
      <div className="channel_wrapper_image">
        <div className="image_wrapper">
          <img className="radio_image" src={channel?.imag} alt="" />
        </div>
        <div className="channel_wrapper">
          <span>{channel?.name}</span> {/*channel name*/}
          <span>{channel?.frequency}</span> {/*channel frequency*/}
        </div>
      </div>
    );
  };
  const withoutImage = () => {
    return (
      <div className="channel_wrapper">
        <span>{channel?.name}</span> {/*channel name*/}
        <span>{channel?.name}</span> {/*channel frequency*/}
      </div>
    );
  };

  return (
    <div className="channels">{showImage ? withImage() : withoutImage()}</div>
  );
};

export default Channels;
