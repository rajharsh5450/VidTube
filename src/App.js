import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedvideo: null,
  };

  componentDidMount() {
    this.handleSubmit("React");
  }

  handleSubmit = async (searchTopic) => {
    const res = await youtube.get("search", { params: { q: searchTopic } });
    // console.log(res);

    this.setState({ videos: res.data.items, selectedvideo: res.data.items[0] });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedvideo: video });
  };

  render() {
    const { videos, selectedvideo } = this.state;

    return (
      <Grid
        container
        justifyContent="center"
        spacing={10}
        style={{ background: "#0a2536" }}
      >
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedvideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={videos}
                onVideoSelect={this.handleVideoSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
