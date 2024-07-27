import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import "./VideoSidebar.css";
const VideoSidebar = ({ likes, comments, shares }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p className="sidebar__paragraph"> {liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p className="sidebar__paragraph">{comments}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p className="sidebar__paragraph">{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
