import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import FeatureCard from "./components/feature-card/FeatureCard";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import SearchBar from "./components/search-bar/SearchBar";
import SideBarLink from "./components/sidebar-link/SideBarLink";
import { connect } from "react-redux";
import { loadState } from "./connectivity/localStorage";
const sideMenu = [
  {
    icon: "fa-user",
    label: "Account",
    disc: "Your account preferences",
  },
  {
    icon: "fa-bell",
    label: "Notifications",
    disc: "Your notifications preferences",
  },
  {
    icon: "fa-plus-square",
    label: "Integrations",
    disc: "Add or remove integrations",
  },
  {
    icon: "fa-user-friends",
    label: "Colleagues",
    disc: "Your colleagues preferences",
  },
  {
    icon: "fa-tag",
    label: "Tags",
    disc: "Add or remove tags",
  },
];

function App(props) {
  const [fav, setFav] = useState("");
  let localFav = loadState();
  const favHandler = (fav) => {
    setFav(fav);
  };

  return (
    <div className="App">
      <Row>
        <Col className="shadow sidebar-container" md={2}>
          <div style={{ marginTop: 16 }}>
            {sideMenu.map((d) => {
              return (
                <div>
                  <SideBarLink icon={d.icon} label={d.label} disc={d.disc} />{" "}
                  <hr />
                </div>
              );
            })}
          </div>
        </Col>
        <Col
          className="shadow integration-container"
          style={{ marginLeft: 20, overflow: "scroll" }}
          md={9}
        >
          <NavigationBar favourite={favHandler} />
          <SearchBar />
          <hr />
          {fav === "fav" ? (
            <div>
              <h6 className="text-muted" style={{ textAlign: "left" }}>
                Favourites
              </h6>

              <Row>
                {props.favIntegrationCards.map((d) => {
                  return (
                    <Col sm={4}>
                      <FeatureCard img={d.img} title={d.title} favdis />
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : (
            <div>
              <h6 className="text-muted" style={{ textAlign: "left" }}>
                Your integrations
              </h6>

              <Row>
                {props.integrationCards.map((d) => {
                  return (
                    <Col sm={4}>
                      {/* {localFav.favIntegration.map((fav) => {
                        if (fav.title === d.title) {
                          return (
                            <FeatureCard img={d.img} title={d.title} inte h />
                          );
                        } else {
                          return (
                            <FeatureCard img={d.img} title={d.title} inte />
                          );
                        }
                      })} */}
                      <FeatureCard img={d.img} title={d.title} inte />
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    integrationCards: state.integrations,
    favIntegrationCards: state.favIntegration,
  };
};

export default connect(mapStateToProps)(App);
