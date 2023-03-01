import { Avatar, Paper } from "@mui/material";
import React, { Component } from "react";
import "./UploadSection.css";
import feeling from "../../../images/feelings.png";
import live from "../../../images/video.png";
import image from "../../../images/image.png";

class UploadSection extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Paper className="Upload_cont">
          <div className="upload_top">
            <div>
              <Avatar
                src="https://i.pinimg.com/originals/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg "
                className="upload_img"
              />
            </div>
            <div>
              <input
                className="upload_text"
                placeholder="What's on you mind?"
                type="text"
              />
            </div>
          </div>
          <div className="upload_down">
            <div className="upload_tabs">
              <img src={live} width="35px" />
              <div> Live video</div>
            </div>
            <div className="upload_tabs">
              <img src={image} width="35px" />
              <div>Photos/video</div>
            </div>
            <div className="upload_tabs">
              <img src={feeling} width="35px" />
              <div>Feeling/Activity</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default UploadSection;
