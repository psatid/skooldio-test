import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import engineIcon from "../img/engi.svg";

export default class admissionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facultyIcon: engineIcon,
      faculty: "คณะวิศวกรรมศาสตร์",
      major: "สาขาวิศวกรรมทั่วไป",
      university: "จุฬาลงกรณ์มหาวิทยาลัย",
      interestedAmount: "10",
    };
  }
  render() {
    return (
      <div className="main-container">
        <Header
          facultyIcon={this.state.facultyIcon}
          faculty={this.state.faculty}
          major={this.state.major}
          university={this.state.university}
        />
        <Content />
        <Footer interestedAmount={this.state.interestedAmount} />
      </div>
    );
  }
}
