import React, { Component } from "react";
import ImageLayout from "./ImageLayout";
import "./Leftside.css";
import Covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";

class Leftside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getdata = () => {
    let jsondata = [
      {
        "image": Covid,
        "text": "Covid-19"
      },
      {
        "image": groups,
        "text": "Groups"
      },
      {
        "image": memories,
        "text": "Groups"
      },
      // {
      //   "image": groups,
      //   "text": "Groups"
      // }
    ];
    this.setState({ data: jsondata });
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <ImageLayout image={item.image} text={item.text} />
        ))}
      </div>
    );
  }
}

export default Leftside;
