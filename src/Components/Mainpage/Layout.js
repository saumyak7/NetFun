import React, { Component } from "react";
import "./Mainpage.css";
import Grid from "@mui/material/Grid";
import Leftside from "./Leftsidepanel/Leftside";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return(
    <div className="mainpage_container">
        <Grid container>
          <Grid item xs={3}>
            <Leftside/>
          </Grid>
          <Grid item xs={6} className = "middleCont">
            <StatusBar/>
             <UploadSection/>
          </Grid>
          <Grid item xs={3}>
            Right
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;