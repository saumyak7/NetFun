import React, { Component } from "react";
import "./NavBar.css";

import Grid from "@mui/material/Grid";
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import groups from "../../images/groups.svg";
import { Avatar } from "@mui/material";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container className="Main">
          <Grid item xs={3}>
            <div className="navLeftbar">
              <img className="navlogo" src={fblogo} width="35px" />
              <input
                className="navSearch"
                type="text"
                placeholder="Search Facebook"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="navContainer">
              <div className="navtabs active">
                <img src={home} height="35px" width="35px" />
              </div>
              <div className="navtabs">
                <img src={page} height="35px" width="35px" />
              </div>
              <div className="navtabs">
                <img src={watch} height="35px" width="35px" />
              </div>
              <div className="navtabs">
                <img src={market} height="35px" width="35px" />
              </div>
              <div className="navtabs">
                <img src={groups} height="35px" width="35px" />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="navRightbar">
              <div className="navRight">
                <Avatar
                  className="profile"
                  src="https://i.pinimg.com/originals/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg"
                ></Avatar>
                <div className="profilename"> Nobita </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
