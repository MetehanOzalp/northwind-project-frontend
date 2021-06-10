import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Language" style={{ marginTop: "0.5em" }}>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
