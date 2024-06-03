import React from "react";
import styled from "styled-components";
import { HelperText, SubmitBtn } from "../../components/common/comStyles";

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  padding-top: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-weight: 700;
  line-height: 38px;
`;

const InputForm = styled.form`
  margin: 15px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  .input-name {
    padding: 5px 0;
    font-size: 15px;
    font-weight: 700;
  }
  .input {
    width: 100%;
    height: 25px;
  }
  .check-btn {
    margin-left: 5px;
    width: 80px;
    background-color: #aca0eb;
    color: white;
    border-radius: 10%;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: #7f6aee;
    }
  }
`;

const Additional = styled.span`
  margin-top: 10px;
  line-height: 16px;
  font-size: 12px;
  font-weight: 200;

  &:hover {
    cursor: pointer;
  }
`;

// ========== JSX ==========

const SignIn = () => {
  // TODO: add form validation

  // TODO: add form submit handler

  return (
    <>
      <FormWrapper>
        <Title>로그인</Title>
        <InputForm>
          <InputItem>
            <span className="input-name">이메일</span>
            <input className="input" name="email" id="email" placeholder="이메일을 입력하세요." />
          </InputItem>
          <InputItem>
            <span className="input-name">비밀번호</span>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
            />
          </InputItem>
          <HelperText>*helper text</HelperText>
        </InputForm>
      </FormWrapper>
      <SubmitBtn
        style={{
          width: "280px",
          height: "30px",
        }}
      >
        로그인
      </SubmitBtn>
      <Additional>회원가입</Additional>
    </>
  );
};

export default SignIn;
