import React, { useState } from "react";

export default function App() {
  const [coins, setCoins] = useState(100);
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState("");
  const [videoCoins, setVideoCoins] = useState(10);

  const handleAddVideo = () => {
    if (newVideo && videoCoins <= coins) {
      setVideos([...videos, { url: newVideo, coins: videoCoins }]);
      setCoins(coins - videoCoins);
      setNewVideo("");
      setVideoCoins(10);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>YouTube Boosting Platform (Demo)</h1>
      <p>Available Coins: <strong>{coins}</strong></p>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={newVideo}
        onChange={(e) => setNewVideo(e.target.value)}
        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
      />
      <input
        type="number"
        min="1"
        max={coins}
        value={videoCoins}
        onChange={(e) => setVideoCoins(Number(e.target.value))}
        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
      />
      <button onClick={handleAddVideo} style={{ padding: "10px 20px" }}>
        Add Video for Boost
      </button>

      <h2>Your Boosted Videos</h2>
      {videos.map((video, index) => (
        <div key={index} style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}>
          <p>URL: {video.url}</p>
          <p>Assigned Coins: {video.coins}</p>
        </div>
      ))}
    </div>
  );
}