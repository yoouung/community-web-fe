import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  width: 340px;
  border-radius: 12px;
  background-color: #fff;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  position: fixed;
  z-index: 10;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  line-height: 28px;
  margin-bottom: 10px;
`;

const Contents = styled.div`
  span {
    font-size: 15px;
    font-weight: 300;
    line-height: 24px;
  }

  .modal-btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
  }
`;

const Button = styled.button`
  width: 95px;
  height: 33px;
  border-radius: 12px;
  border: none;

  font-size: 15px;
  font-weight: 200;

  &:hover {
    cursor: pointer;
  }
`;

const MenuModal = ({ category, message, contents }) => {
  return (
    <Modal>
      <Title>{message}</Title>
      <Contents>
        <span>{contents}</span>
        <div className="modal-btn-container">
          <Button style={{ backgroundColor: "#242424", color: "#fff" }}>취소</Button>
          <Button style={{ backgroundColor: "#c4a5fa" }}>확인</Button>
        </div>
      </Contents>
    </Modal>
  );
};

export default MenuModal;
