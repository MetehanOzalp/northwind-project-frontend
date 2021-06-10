import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz" style={{ marginTop: "0.5em" }}>
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Monster Laptop</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
