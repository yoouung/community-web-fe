import React from "react";
import styled from "styled-components";
import back from "../../../images/icons/chevron-left.png";
import user from "../../../images/userimage.png";
import HeaderModal from "./modal";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid black;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  min-width: 300px;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  left: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  padding: 3px;
  position: absolute;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

// ========== JSX ==========

const Header = () => {
  const location = window.location;

  // TODO: add back icon condition

  // TODO: add modal event

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <BackButton onClick={() => window.history.back()}>
          <img src={back} alt="back" />
        </BackButton>
        <Title onClick={() => (location.href = "/")}>아무 말 대잔치</Title>
        <ProfileImage alt="user" src={user} />
        <HeaderModal />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
