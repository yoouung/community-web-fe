import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
`;

const Button = styled.div`
  border: 1px solid #aca0eb;
  border-radius: 8px;
  margin-left: 5px;

  font-size: 15px;
  line-height: 23px;
  font-weight: 200;

  padding: 2px 12px 2px 12px;
  &:hover {
    cursor: pointer;
  }
`;

const MenuBtnBox = () => {
  return (
    <Wrapper>
      <Button>수정</Button>
      <Button>삭제</Button>
    </Wrapper>
  );
};

export default MenuBtnBox;
