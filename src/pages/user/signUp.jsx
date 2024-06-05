import React from "react";
import {
  FormSection,
  Title,
  InputSection,
  InputItem,
  ProfileImageWrapper,
  AdditionalFunc,
} from "../../components/common/formStyle";
import { HelperText, SubmitBtn } from "../../styles/commonStyles";
import plus from "../../images/icons/plus.png";

const SignUp = () => {
  // TODO: add form validation

  // TODO: add form submit handler

  return (
    <>
      <FormSection>
        <Title>회원가입</Title>
        <InputSection>
          <InputItem>
            <span className="input-name">프로필 사진*</span>
            <HelperText>*프로필 사진을 추가해주세요.</HelperText>
            <ProfileImageWrapper>
              <label htmlFor="profile-image">
                <img src={plus} alt="profile" />
              </label>
              <input type="file" name="profile-image" accept="image/*" />
            </ProfileImageWrapper>
          </InputItem>
        </InputSection>
        <InputSection>
          <InputItem>
            <span className="input-name">이메일*</span>
            <div className="input-wrapper">
              <input className="input" name="email" placeholder="이메일을 입력하세요." />
              <button type="button" className="check-btn">
                중복확인
              </button>
            </div>
            <HelperText>*helper text</HelperText>
          </InputItem>
          <InputItem>
            <span className="input-name">비밀번호*</span>
            <div className="input-wrapper">
              <input
                className="input"
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
            <HelperText>*helper text</HelperText>
          </InputItem>
          <InputItem>
            <span className="input-name">비밀번호 확인*</span>
            <div className="input-wrapper">
              <input
                className="input"
                name="password-confirm"
                type="password"
                placeholder="비밀번호를 한 번 더 입력하세요."
              />
            </div>
            <HelperText>*helper text</HelperText>
          </InputItem>
          <InputItem>
            <span className="input-name">닉네임*</span>
            <div className="input-wrapper">
              <input className="input" name="nickname" placeholder="닉네임을 입력하세요." />
              <button
                type="button"
                className="check-btn
              "
              >
                중복확인
              </button>
            </div>
            <HelperText>*helper text</HelperText>
          </InputItem>
        </InputSection>
      </FormSection>
      <SubmitBtn style={{ width: "280px", height: "30px" }}>회원가입</SubmitBtn>
      <AdditionalFunc
        onClick={() => {
          window.location.href = "/signin";
        }}
      >
        로그인하러 가기
      </AdditionalFunc>
    </>
  );
};

export default SignUp;
