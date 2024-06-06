import React from "react";
import { HelperText, SubmitBtn } from "../../styles/commonStyles";
import {
  FormSection,
  Title,
  InputSection,
  InputItem,
  AdditionalFunc,
} from "../../components/common/userStyle";

const SignIn = () => {
  // TODO: add form validation

  // TODO: add form submit handler

  return (
    <>
      <FormSection>
        <Title>로그인</Title>
        <InputSection>
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
              placeholder="비밀번호를 입력하세요."
            />
          </InputItem>
          <HelperText>*helper text</HelperText>
        </InputSection>
      </FormSection>
      <SubmitBtn
        style={{
          width: "280px",
          height: "30px",
        }}
      >
        로그인
      </SubmitBtn>
      <AdditionalFunc>회원가입</AdditionalFunc>
    </>
  );
};

export default SignIn;
