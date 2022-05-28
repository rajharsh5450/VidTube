import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading......</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: "60%", marginLeft: "20px" }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          height={"100%"}
          width={"100%"}
          title="Video Player"
        />
      </Paper>
      <Paper
        elevation={6}
        style={{
          padding: "15px",
          marginLeft: "20px",
          background: "#0e3157",
          color: "aliceblue",
        }}
      >
        <Typography variant={"h5"}>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant={"subtitle1"}>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant={"subtitle2"}>
          {video.snippet.description}
        </Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
