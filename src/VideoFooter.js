import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Marquee from "react-fast-marquee";
import AlbumIcon from "@mui/icons-material/Album";
const VideoFooter = ({ username, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h5>@{username}</h5>
        <p>{description}</p>
        <div className="videoFooter__icon">
          <MusicNoteIcon fontSize="small" />
          <Marquee pauseOnHover={true} speed={60}>
            {song}
          </Marquee>
          <div className="record_icon">
            <AlbumIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
