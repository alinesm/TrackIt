import React from "react";
import styled from "styled-components";
import logo from "../assets/images/TrackIt.png";
import { useGlobalContext } from "../context";

function Header() {
  const { photo, token } = useGlobalContext();

  if (token) {
    return (
      <HeaderStyle>
        <LogoStyle>
          <img src={logo} alt="" />
        </LogoStyle>
        <PhotoStyle>
          <img src={photo} alt="" />
        </PhotoStyle>
      </HeaderStyle>
    );
  }
}

export default Header;

const HeaderStyle = styled.div`
  position: fixed;
  width: 375px;
  z-index: 1;
  height: 70px;
  top: 0px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoStyle = styled.div`
  img {
    width: 97px;
    height: 35px;
  }
`;

const PhotoStyle = styled.div`
  img {
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    border-radius: 98.5px;
  }
`;
