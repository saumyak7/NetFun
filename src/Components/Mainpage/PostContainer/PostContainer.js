import React, { Component } from "react";
import Post from "./Post";
import post_img from "../../../images/post.jpeg";

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
  };

  getData = () => {
    let json = [
      {
        post_ID: 1,
        user_ID: 1234565,
        user_img: "url...",
        user_name: "Nobita Nobi",
        description: "Beautiful wallpaper",
        post_img: post_img,
        Like: "25",
      },
      {
        post_ID: 2,
        user_ID: 1234565,
        user_img: "url...",
        user_name: "Nobita Nobi",
        description: "Beautiful wallpaper",
        post_img: "",
        Like: "25",
      },
    ];

    this.setState({ data: json });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Post object={item} />
        ))}
      </div>
    );
  }
}

export default PostContainer;
