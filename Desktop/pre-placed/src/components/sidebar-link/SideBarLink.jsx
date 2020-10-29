import React from "react";
import { Col, Row } from "react-bootstrap";

const SideBarLink = (props) => {
  return (
    <Row style={{ cursor: "pointer" }}>
      <Col
        className="d-flex pl-3"
        style={{ justifyContent: "center", alignItems: "center" }}
        sm={4}
      >
        <i className={`fas ${props.icon} text-muted`}></i>
      </Col>
      <Col className="text-left pl-1" sm={8}>
        <p className="mb-0">{props.label}</p>
        <p style={{ fontSize: 10 }} className="mt-0 text-muted mb-0">
          {props.disc}
        </p>
      </Col>
    </Row>
  );
};

export default SideBarLink;
