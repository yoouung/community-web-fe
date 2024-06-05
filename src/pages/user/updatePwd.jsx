import React from "react";
import styled from "styled-components";
import {
  FormSection,
  InputItem,
  InputSection,
  Title,
  Toast,
} from "../../components/common/formStyle";
import { HelperText, SubmitBtn } from "../../styles/commonStyles";

const UpdatePwd = () => {
  return (
    <>
      <FormSection>
        <Title>비밀번호 수정</Title>
        <InputSection>
          <InputItem>
            <span class="input-name">비밀번호</span>
            <input
              class="input"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
            <HelperText>*helper text</HelperText>
          </InputItem>
          <InputItem>
            <span class="input-name">비밀번호 확인</span>
            <input
              class="input"
              name="password-confirm"
              type="password"
              placeholder="비밀번호를 한 번 더 입력하세요."
            />
            <HelperText>*helper text</HelperText>
          </InputItem>
        </InputSection>
      </FormSection>
      <SubmitBtn style={{ width: "280px", height: "30px" }}>수정하기</SubmitBtn>

      <Toast>수정 완료</Toast>
    </>
  );
};

export default UpdatePwd;
