import React from "react";

import { Container, ScreenPicture } from "./styles";

const Header = () => {
  return (
    <Container>
      <ScreenPicture>
        <img
          src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
          alt="Profile"
        />
      </ScreenPicture>
    </Container>
  );
};

export default Header;
