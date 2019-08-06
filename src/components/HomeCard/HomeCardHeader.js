import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeCard() {
  return (
    <div className="d-flex justify-content-between ch-color text-white rounded-top shadow-lg p-2 mb-2">
      <div>
        <h4>My Home</h4>
        <p>Living Room</p>
      </div>
      <div>
        <FontAwesomeIcon icon="list-ul" />

        <DropdownButton id="dropdown-item-button" title="">
          <Dropdown.Item as="button">Edit</Dropdown.Item>
          <Dropdown.Item as="button">Delete</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
