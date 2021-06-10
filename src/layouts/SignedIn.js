import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://yt3.ggpht.com/yti/ANoDKi4Xp6Lc2-ZCsDN_MKMfUbinaEJ2NtZyetz-x6YJ=s108-c-k-c0x00ffffff-no-rj"
        ></Image>
        <Dropdown pointing="top right" text="Metehan Özalp">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
