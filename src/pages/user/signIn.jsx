import React, { useEffect, useState } from "react";
import { HelperText, SubmitBtn } from "../../styles/commonStyles";
import {
  FormSection,
  Title,
  InputSection,
  InputItem,
  AdditionalFunc,
} from "../../components/common/userStyle";
import useApi from "../../hooks/axiosInterceptor";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {}, [emailValid, passwordValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (passwordRegex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const updateHelperText = () => {
    if (!emailValid) {
      setHelperText("이메일 형식이 올바르지 않습니다.");
    } else if (!passwordValid) {
      setHelperText("비밀번호는 대문자, 소문자, 숫자, 특수문자가 모두 포함되어야 합니다.");
    } else {
      setHelperText("");
    }
  };

  const updateButtonStyle = () => {
    // const loginButton =
  };

  const handleLogin = async (e) => {
    window.location.href = "/";
    // TODO: authentication
  };

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
        className="login-btn"
        onClick={handleLogin}
      >
        로그인
      </SubmitBtn>
      <AdditionalFunc>회원가입</AdditionalFunc>
    </>
  );
};

export default SignIn;
