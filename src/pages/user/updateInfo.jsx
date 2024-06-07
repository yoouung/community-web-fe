import React from "react";
import styled from "styled-components";
import {
  FormSection,
  InputSection,
  InputItem,
  ProfileImageWrapper,
  Title,
  AdditionalFunc,
  Toast,
} from "../../components/common/userStyle";
import { HelperText, ModalBackdrop, SubmitBtn } from "../../styles/commonStyles";
import profile from "../../images/userimage.png";
import MenuModal from "../../components/menuModal";

const ProfileImageOverlay = styled.div`
  width: 140px;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #4646465c;
  border-radius: 50%;
  position: absolute;

  label {
    width: 45px;
    height: 30px;

    border: 1px solid #fff;
    background-color: #000000;
    border-radius: 20px;
    opacity: 0.5;
    color: #fff;
    font-size: 13px;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const UpdateInfo = () => {
  return (
    <>
      <ModalBackdrop />

      <FormSection>
        <Title>회원 정보 수정</Title>
        <InputSection>
          <InputItem>
            <span className="input-name">프로필 사진*</span>
            <ProfileImageWrapper>
              <label htmlFor="profile-image">
                <image className="user-image" alt="profile" src={profile} />
              </label>
              <ProfileImageOverlay>
                <label htmlFor="profile-image">변경</label>
                <input type="file" id="profile-image" name="profile-image" accept="image/*" />
              </ProfileImageOverlay>
            </ProfileImageWrapper>
          </InputItem>
        </InputSection>
        <InputSection>
          <InputItem>
            <span className="input-name">이메일</span>
            <span className="text" id="email"></span>
          </InputItem>
          <InputItem>
            <span className="input-name">닉네임</span>
            <input className="input" name="nickname" placeholder="닉네임을 입력하세요." />
            <HelperText>*helper text</HelperText>
          </InputItem>
        </InputSection>
      </FormSection>
      <SubmitBtn style={{ width: "280px", height: "30px" }}>수정하기</SubmitBtn>
      <AdditionalFunc>회원 탈퇴</AdditionalFunc>

      <Toast>수정 완료</Toast>

      <MenuModal
        category="user-delete"
        message="회원탈퇴 하시겠습니까?"
        contents="작성된 게시글과 댓글은 삭제됩니다."
      />
    </>
  );
};

export default UpdateInfo;
