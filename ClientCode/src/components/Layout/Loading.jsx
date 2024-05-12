import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <>
      {/* loader lagynge q ki jab tak api se data uthkar aega tab tak loader load hoga  */}
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className="visually-hidden"></span>
      </Spinner>
    </>
  );
}

export default Loading;
