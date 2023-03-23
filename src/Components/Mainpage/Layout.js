import React, { Component } from "react";
import "./Mainpage.css";
import Grid from "@mui/material/Grid";
import Leftside from "./Leftsidepanel/Leftside";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";
import PostContainer from "./PostContainer/PostContainer";
import Rightside from "./Rightsidepanel/Rightside";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="mainpage_container">
        <Grid container>
          <Grid item xs={3}>
            <Leftside />
          </Grid>
          <Grid item xs={6} className="middleCont">
            <StatusBar />
            <UploadSection />
            <PostContainer />
          </Grid>
          <Grid item xs={3}>
            <Rightside />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;
