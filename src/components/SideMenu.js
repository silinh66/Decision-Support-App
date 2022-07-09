import React, { Component } from "react";
import SideBarMenuItem from "./SideBarMenuItem";

const listSideMenu = [
  {
    id: "0",
    label: "Trang chủ",
    icon: "home",
  },
  {
    id: "1",
    label: "Thời khoá biểu",
    icon: "calendar",
  },
  {
    id: "2",
    label: "Quản lý mục tiêu",
    icon: "target",
  },
  {
    id: "3",
    label: "Danh sách phương án",
    icon: "entrance",
  },
  {
    id: "4",
    label: "Bảng điểm",
    icon: "score",
  },
  {
    id: "5",
    label: "Làm bài tập",
    icon: "exercise",
  },
  {
    id: "6",
    label: "Đánh giá khả năng đỗ",
    icon: "ability",
  },
];

export default class SideMenu extends Component {
  render() {
    return (
      <div style={styles.sideMenu}>
        <div style={styles.title}>TheTester</div>
        <div style={styles.devider}></div>
        {listSideMenu.map((item) => (
          <SideBarMenuItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

const styles = {
  devider: {
    height: "1px",
    background: "#7D72A7",
  },
  title: {
    fontSize: "17px",
    color: "#FFFFFF",
    fontWeight: "700px",
    marginLeft: "16px",
    lineHeight: "44px",
  },
  sideMenu: {
    background: "#736198",
    width: "100%",
  },
};
