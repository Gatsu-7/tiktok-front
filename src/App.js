import Video from "./Video";
import "./App.css";
import axios from "./axios";
import { useEffect, useState } from "react";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      {/*app container */}
      {/*videos */}
      <div className="app_videos">
        {videos.map(
          ({ url, username, description, song, likes, comments, shares }) => (
            <Video
              key={url} // Ensure you provide a unique key for each element
              url={url}
              username={username}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
