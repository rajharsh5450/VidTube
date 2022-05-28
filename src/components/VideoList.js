import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos) return <div>Loading videos......</div>;

  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
  ));

  return (
    <Grid container spacing={5}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
