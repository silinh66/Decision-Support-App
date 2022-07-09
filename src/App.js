import "./App.css";
import { Row, Col } from "antd";
import SideBar from "./components/SideBar";
import SideMenu from "./components/SideMenu";
import UserContainer from "./components/UserContainer";
import HomeContent from "./components/HomeContent";
import Inspector from "./components/Inspector";
function App() {
  return (
    <div style={styles.container}>
      <Row style={styles.row}>
        {/* <Col span={1} xs={12} sm={3} md={2} lg={1} style={styles.firstCol}>
          <FirstColumn />
        </Col> */}
        <Col span={5} xl={5}>
          <div style={styles.firstCol}>
            <div style={styles.sideBar}>
              <SideBar />
            </div>
            <div style={styles.sideMenu}>
              <SideMenu />
            </div>
          </div>
          <UserContainer />
        </Col>
        <Col span={15} xl={15} style={styles.secondCol}>
          <HomeContent />
        </Col>
        <Col span={4} xl={4}>
          <div style={styles.thirdCol}>
            <Inspector />
          </div>
        </Col>
      </Row>
    </div>
  );
}

const styles = {
  container: {
    height: "150vh",
    display: "flex",
    flexDirection: "column",
  },
  firstCol: {
    display: "flex",
    height: "90vh",
    // width: "385px",
    position: "sticky",
    top: 0,
  },
  secondCol: {
    backgroundColor: "#1D203E",
    position: "sticky",
    // left: "385px",
    // right: "306px",
  },
  thirdCol: {
    backgroundColor: "#2C2F48",
    boxShadow: "inset 1px 0px 0px rgba(255, 255, 255, 0.1)",
    display: "flex",
    height: "100vh",
    // width: "306px",
    position: "sticky",
    top: 0,
  },
  row: {
    height: "100%",
  },
  sideBar: {
    display: "flex",
    // flex: 1,
    width: "77px",
  },
  sideMenu: {
    display: "flex",
    flex: 4,
    // width: "306px",
  },
};

export default App;
