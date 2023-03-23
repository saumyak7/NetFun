import React, { Component } from "react";
import { Avatar, Paper } from "@mui/material";
import "./PostContainer.css";
import "./Post.css";
import post from "../../../images/post.jpeg";
import like from "../../../images/like.png";
import likebutton from "../../../images/likebutton.png";
import commentbutton from "../../../images/comment.png";
import sharebutton from "../../../images/share.png";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  isImageAvailabe = (data) => {
    return (data = "" ? false : true);
  };

  render() {
    return (
      <div>
        <Paper className="post_container">
          {/* //header */}
          <div className="post_header">
            <div>
              <Avatar
                className="post_img"
                src="https://i.pinimg.com/originals/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg"
              />
            </div>

            <div className="post_name">{this.props.object.user_name}</div>
          </div>
          {/* description */}
          <div className="post_description">
            {this.props.object.description}
          </div>
          {/* image */}
          <div className="post_img_feed">
            {this.isImageAvailabe(this.props.object.post_img) ? (
              <img src={this.props.object.post_img} width="600px" />
            ) : (
              <span></span>
            )}
          </div>
          {/* like count  */}
          <div className="likecount_cont">
            <div>
              <img className="like_img" src={like} />
            </div>
            <div class=" like_count">{this.props.object.Like}</div>
          </div>
          {/* like share box */}

          <div className="post_likeshare">
            <div className="post_tabs">
              <div className="post_firsttab">
                <img className="likebutton_img" src={likebutton} />
              </div>
              <div className="likebutton_text">Like</div>
            </div>

            <div className="post_tabs">
              <div className="post_firsttab">
                <img className="likebutton_img" src={commentbutton} />
              </div>
              <div className="likebutton_text">Comment</div>
            </div>

            <div className="post_tabs">
              <div className="post_firsttab">
                <img className="likebutton_img" src={sharebutton} />
              </div>
              <div className="likebutton_text">share</div>
            </div>
          </div>
          {/* comment section */}
          <div className="upload_comment">
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
                  placeholder="What's on your mind?"
                  type="text"
                />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Post;
