import React from "react";

import { ButtonStyled } from "./styles";

const CategoryButton = ({ onClick, text }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default CategoryButton;
