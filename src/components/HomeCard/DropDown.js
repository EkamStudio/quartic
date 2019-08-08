import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionModal from "../OptionModal"

class DropDown extends React.Component {
  state = {
    isOpen: false,
    editModalIsOpen: false
  }
  onToggle = () => { // toggle dropdown menu
    this.setState(() => ({
      isOpen: !this.state.isOpen,
    }))
  };
  onEdit = () => { // open edit modal
    this.openEditModal();
    this.onToggle();
  }
  onDelete = (e) => {
    const {handleDeleteOption, option} = this.props;
    handleDeleteOption(option.id);
  }
  openEditModal = () => {
    this.setState(() => ({editModalIsOpen: true}));
  }
  closeEditModal = () => {
    this.setState(() => ({editModalIsOpen: false}));
  }
  saveEditModal = (e) => {
    e.preventDefault();
    const {handleEditOption, option} = this.props;
    const editedOption = {};
    editedOption.id = option.id;
    if (e.target[0].value !== ""
     && e.target[1].value !== "" 
     && e.target[2].value !== "") {
      editedOption.smallTitle = (e.target[0].value).trim();
      editedOption.device = e.target[1].value;
      editedOption.plugin = e.target[2].value;
      handleEditOption(editedOption);
      this.closeEditModal();
    }
  }
  render() {
    const { isOpen, editModalIsOpen } = this.state;
    const { option } = this.props;
    return (
      <div className="dropdowndiv">
        <button className="dropbtn" onClick={this.onToggle}>
          <FontAwesomeIcon icon="list-ul" />
        </button>
        <div style={{ display: isOpen ? "block" : "none" }} className="dropdown-content">
          <button 
          onClick={this.onEdit}>Edit</button>
          <button 
          onClick={this.onDelete}>Delete</button>
        </div>
        <OptionModal 
          title="Edit Modal"
          editModalIsOpen={editModalIsOpen}
          option={option}
          ariaHideApp={false}
          closeEditModal={this.closeEditModal}
          saveEditModal={this.saveEditModal}
        />
      </div>
    );
  };
}

export default DropDown;
