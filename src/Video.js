import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, username, description, song, likes, comments, shares }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    const video = videoRef.current;
    // if video is playing -> stop it
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video
        .play()
        .then(() => setPlaying(true))
        .catch((error) => console.error("Error playing the video:", error));
    }

    // if it doesn't ->well play it
  };
  return (
    <div className="video">
      <video
        className="video_player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={url}
      ></video>

      <img
        src="https://img.freepik.com/free-psd/3d-realistic-tiktok-icon_125540-2052.jpg"
        alt="TikTok Logo"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "30px",
          height: "30px",
          pointerEvents: "none", // Ensures the logo does not interfere with video controls
        }}
      />

      {/*VideoFooter */}
      <VideoFooter username={username} description={description} song={song} />

      {/*VideoSidebar */}
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;
