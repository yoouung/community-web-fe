import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 5px;
  width: 115px;
  background-color: #d9d9d9;
  display: none;
`;

const ModalItem = styled.a`
  padding: 10px;
  font-size: 12px;
  font-weight: 300;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
  }
`;

// ========== JSX ==========

const HeaderModal = () => {
  const items = [
    { name: "회원정보 수정", link: "/update-info" },
    { name: "비밀번호 수정", link: "/update-password" },
    { name: "로그아웃", link: "/logout" },
  ];

  return (
    <ModalContainer>
      <div>
        {items.map((item, index) => {
          return (
            <ModalItem key={index} href={item.link}>
              {item.name}
            </ModalItem>
          );
        })}
      </div>
    </ModalContainer>
  );
};

export default HeaderModal;
