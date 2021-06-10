import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} primary>
          Giris Yap
        </Button>
        <Button style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  );
}
