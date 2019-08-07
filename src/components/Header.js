import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="container-fluid bg-light mb-2">
      <div className="row justify-content-center">
        <div className="col-sm-5 py-3">
          <h2>Dashboard</h2>
          <p className="text-muted">Welcome to my dashboard</p>
        </div>
        <div className="col-sm-5 py-3">
          <button 
          type="button" 
          className="btn btn-dark float-right px-4"
          onClick={()=>{console.log('Adding...!')}}
          >
            <FontAwesomeIcon className="mr-2" icon="plus-circle" />
            Add New
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
