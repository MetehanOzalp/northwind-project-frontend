import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut() {
  return (
    <div>
      <Menu.Item style={{ marginTop: "0.2em" }}>
        <Button primary>Giris Yap</Button>
        <Button style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  );
}
