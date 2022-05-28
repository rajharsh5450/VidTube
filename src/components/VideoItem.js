import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginRight: "10px",
          background: "#0e3157",
          color: "aliceblue",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />

        <Typography variant={"subtitle1"} style={{ paddingRight: "10px" }}>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
