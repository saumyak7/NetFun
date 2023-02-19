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
                  src="https://i.pinimg.com/originals/fd/99/42/fd99420bee2291f2bcc04babc467c3c8.png"
                ></Avatar>
                <div className="profilename"> Bheem</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
