import React, { useState } from "react";
import { connect } from "react-redux";
import "./FeatureCard.css";
const FeatureCard = (props) => {
  const [heart, setHeart] = useState("far");
  const heartHandler = () => {
    props.addToFav(props.title, props.img);
    setHeart("fas");
  };
  const deleteHandler = () => {
    props.deleteFromFav(props.title);
    setHeart("far");
  };

  return (
    <div className="feature-card text-left d-inline-block">
      <div
        className="d-flex"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="img-fluid card-img" src={props.img} alt="icon" />
      </div>
      <h6>{props.title}</h6>
      <p style={{ fontSize: 12 }} className="text-muted">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.doloremque
        magni iusto non dolores aliquam perferendis accusantium reprehenderit
        dignissimos fugiat inventore!
      </p>
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#A6D2F3",
          }}
        >
          Connected
        </button>
        <div>
          <button
            onClick={heartHandler}
            disabled={heart === "fas" || props.favdis ? true : false}
            style={{ background: "transparent", border: "none" }}
          >
            {props.favdis ? (
              <i className={`fas fa-heart mr-3`}></i>
            ) : (
              <i className={`${heart} fa-heart mr-3`}></i>
            )}
          </button>
          <button
            disabled={props.inte ? true : false}
            style={{ background: "transparent", border: "none" }}
            onClick={deleteHandler}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (title, img) =>
      dispatch({ type: "AddToFav", payload: { title, img } }),
    deleteFromFav: (title) =>
      dispatch({ type: "DeleteFromFav", payload: { title } }),
  };
};

export default connect(null, mapDispatchToProps)(FeatureCard);
