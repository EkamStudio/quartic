import React from "react";
import moment from 'moment'

const HomeCardBody = (props) => {
  const { option } = props;
  return (
    <div className="shadow-lg rounded-bottom">
      <div className="d-flex justify-content-between text-center">
        <div className="card-body border-right">
          <h2>{option.device}</h2>
          <p>Devices</p>
        </div>
        <div className="card-body">
          <h2 className="org-color">{option.pluging}</h2>
          <p>Plugins</p>
        </div>
      </div>
      <div className="border-top p-2">
        <p>Added on {moment().format('DD/MM/YYYY')}</p>
      </div>
    </div>
  );
}

export default HomeCardBody;
