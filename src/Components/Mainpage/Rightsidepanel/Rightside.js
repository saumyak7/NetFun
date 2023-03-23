import React, { Component } from "react";
import "./Rightside.css";
import ImageLayout from "../../Mainpage/Leftsidepanel/ImageLayout";
import Jiyaan from "../../../images/Jiyaan.png";
import Shizuka from "../../../images/Shizuka.png";
import sunio from "../../../images/sunio.jpg";
import doraemon from "../../../images/doraemon.jpg";
import messengerkids from "../../../images/messengerkids.png";
import mom from "../../../images/mom.jpg";
import admanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";

class Rightside extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
  };
  getdata = () => {
    let jsondata = [
      {
        image: doraemon,
        text: "Doraemon",
      },
      {
        image: Jiyaan,
        text: "Jiyaan",
      },
      {
        image: Shizuka,
        text: "Shizuka",
      },
      {
        image: sunio,
        text: "sunio",
      },
      {
        image: mom,
        text: "Nobita mom",
      },
    ];
    this.setState({ data: jsondata });
  };

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div className="Rightside_cont">
        <div className="Rightside_header">Contacts</div>
        <div className="Rightside_content">
          {this.state.data.map((item) => (
            <ImageLayout image={item.image} text={item.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default Rightside;
