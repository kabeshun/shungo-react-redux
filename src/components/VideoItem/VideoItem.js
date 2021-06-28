import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  console.log(props.video.snippet.title);
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">{props.video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
