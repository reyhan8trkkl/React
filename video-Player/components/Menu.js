import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="d-flex justify-content-center">
      <Link className="card-link" to="fast">
        Fast
      </Link>
      <Link className="card-link" to="slow">
        Slow
      </Link>
      <Link className="card-link" to="cute">
        Cute
      </Link>
      <Link className="card-link" to="eek">
        Eek
      </Link>
    </div>
  );
}
