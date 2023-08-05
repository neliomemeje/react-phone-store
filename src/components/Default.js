import React from "react";
import { useLocation } from "react-router-dom";

function Default() {
  const location = useLocation();
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-10 mx-auto text-capitalize mt-5 text-title">
          <h1>error 404</h1>
          <h2>
            the requested url{" "}
            <span className="text-danger">{location.pathname}</span> was not
            found.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Default;
