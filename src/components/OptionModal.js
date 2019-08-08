import React from "react";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'))

const OptionModal = (props) => {
  const { 
    title, 
    editModalIsOpen, 
    closeEditModal,
    saveEditModal
  } = props;
  return (
    <Modal
      isOpen={editModalIsOpen}
      contentLabel="Add/ update content" // accessibility settings
      aria={{
        labelledby: "heading",
        describedby: "full_description"
      }}
      style={customStyles}
    >
      <h3 id="heading">{title}</h3>
      <div id="full_description">Edit your card...</div>
      <form onSubmit={saveEditModal}>
        <div className="form-group">
          <label htmlFor="title">Title <span>*</span></label>
          <input type="text" className="form-control" id="title" placeholder="card title"/>
        </div>
        <div className="form-group">
          <label htmlFor="devices">Devices <span>*</span></label>
          <input type="number" className="form-control" id="devices" placeholder="devices number" min="0"/>
        </div>
        <div className="form-group">
          <label htmlFor="plugins">Plugins <span>*</span></label>
          <input type="number" className="form-control" id="plugins" placeholder="plugins number" min="0"/>
        </div>
        <button type="submit" value="submit" className="btn btn-primary btn-lg btn-block">Save</button>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={closeEditModal}>Close</button>
      </form>
      <p className="text-danger"><span>*</span> All fields are required!</p>
    </Modal>
  )
}

export default OptionModal;
