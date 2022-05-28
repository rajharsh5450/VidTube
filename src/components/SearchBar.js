import React, { Component } from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = { searchTopic: "" };

  handleChange = (e) => {
    this.setState({ searchTopic: e.target.value });
  };

  handleSubmit = (e) => {
    const { searchTopic } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTopic);

    e.preventDefault();
  };

  render() {
    return (
      <Paper
        elevation={6}
        style={{ padding: "25px", borderRadius: "16px", background: "#15304d" }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            placeholder={"Search for videos"}
            onChange={this.handleChange}
            inputProps={{ style: { color: "aliceblue" } }}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
