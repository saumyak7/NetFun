import React, { Component } from "react";
import ImageLayout from "./ImageLayout";
import "./Leftside.css";
import Covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import nobita from "../../../images/nobita.jpg";
import messengerkids from "../../../images/messengerkids.png";
import ads from "../../../images/ads.png";
import admanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";


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
        "image": nobita,
        "text" :  "Nobita"
      },
      {
        "image": Covid,
        "text": "Covid-19"
      },
      {
        "image": groups,
        "text": "Friends"
      },
      {
        "image": memories,
        "text": "Memories"
      },
       {
         "image": messengerkids,
         "text": "Messenger Kids"
       },
       {
        "image": ads,
        "text": "Ad Centre"
       },
       {
        "image": admanager, blood,
        "text": "Ads manager"
       },
       {
        "image": blood,
        "text": "Blood Donations"
       }
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
