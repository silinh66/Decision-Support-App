import React, { Component } from "react";
import { Image } from "antd";
export default class Inspector extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Image preview={false} src={require("../asssets/Images/mail.png")} />
          <Image preview={false} src={require("../asssets/Images/chat.png")} />
          <Image preview={false} src={require("../asssets/Images/bell.png")} />
        </div>
        <div style={styles.avatarContainer}>
          <Image
            preview={false}
            style={styles.looperGroup}
            src={require("../asssets/Images/LooperGroup.png")}
          />
          {/* <Image
            preview={false}
            style={styles.avatar}
            src={require("../asssets/Images/avatar.png")}
          /> */}
          <div style={styles.name}>Hà Bảo Khiêm</div>
          <div style={styles.job}>Học sinh</div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    // height: "100vh",
    backgroundColor: "#2C2F48",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // position: "sticky",
    // top: "100vh",
    // width: "100%",
    borderLeft: "1px solid #5A5D70",
  },
  header: {
    textAlign: "center",
    height: "44px",
    backgroundColor: "#2C2F48",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingRight: "30px",
    paddingLeft: "30px",

    borderBottom: "1px solid #5A5D70",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  looperGroup: {
    position: "relative",
  },
  name: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#ffffff",
  },
  job: {
    color: "rgba(255, 255, 255, 0.25)",
    fontWeight: "400",
    fontSize: "18px",
  },
  avatar: {
    position: "relative",
    top: "-200%",
    width: "100px",
    height: "100px",
  },
};
