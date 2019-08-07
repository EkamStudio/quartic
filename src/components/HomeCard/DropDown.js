import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DropDown extends React.Component {
  state = {
    isOpen: false
  }
  onToggle = () => {
    this.setState(() => ({
      isOpen: !this.state.isOpen,
    }))
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div className="dropdowndiv">
        <button className="dropbtn" onClick={this.onToggle}>
          <FontAwesomeIcon icon="list-ul" />
        </button>
        <div style={{ display: isOpen ? 'block' : 'none' }} className="dropdown-content">
          <button onClick={()=>{console.log('Edit...')}}>Edit</button>
          <button onClick={()=>{console.log('Delete...')}}>Delete</button>
        </div>
      </div>
    );
  };
}

export default DropDown;
