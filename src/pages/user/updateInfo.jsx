import React from "react";
import styled from "styled-components";
import {
  FormSection,
  InputSection,
  InputItem,
  ProfileImageWrapper,
  Title,
  AdditionalFunc,
} from "../../components/common/formStyle";
import { HelperText, Modal, ModalBackdrop, SubmitBtn } from "../../styles/commonStyles";
import profile from "../../images/userimage.png";

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

const Toast = styled.div`
  background-color: #aca0eb;
  width: 100px;
  height: 40px;
  border-radius: 20px;

  color: white;
  font-size: 14px;

  display: none;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 30px;
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
                <img className="user-img" alt="profile" src={profile} />
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

      <Modal>
        <span className="modal-title">회원탈퇴 하시겠습니까?</span>
        <div className="modal-contents">
          <span>작성된 게시글과 댓글은 삭제됩니다.</span>
          <div className="modal-btn-container">
            <button className="modal-btn" style={{ backgroundColor: "#242424", color: "#fff" }}>
              취소
            </button>
            <button className="modal-btn" style={{ backgroundColor: "#c4a5fa" }}>
              확인
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateInfo;
