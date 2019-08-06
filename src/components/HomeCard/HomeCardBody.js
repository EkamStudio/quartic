import React from "react";

export default function HomeCardBody() {
  return (
    <div className="shadow-lg rounded-bottom">
      <div className="d-flex justify-content-between text-center">
        <div className="card-body border-right">
          <h2>1</h2>
          <p>Devices</p>
        </div>
        <div className="card-body">
          <h2 className="org-color">2</h2>
          <p>Plugins</p>
        </div>
      </div>
      <div className="border-top p-2">
        Date 
      </div>
    </div>
  );
}