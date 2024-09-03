import React from "react";
import styled from "styled-components";
import { Title } from "../../components/common/userStyle";
import { HelperText, SubmitBtn } from "../../styles/commonStyles";

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #00000029;
  border: none;
`;

const PostWriteContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const PostForm = styled.form``;

const PostFormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  .item-name {
    font-size: 15px;
    font-weight: 800;
    line-height: 30px;
  }

  textarea {
    border: none;
    resize: none;
    background-color: inherit;

    line-height: 20px;

    &:focus {
      outline: none;
    }
  }
  .post-title {
    height: 25px;

    font-size: 14px;
    font-weight: 600;
  }
  .post-contents {
    height: 270px;

    font-size: 13px;
    font-weight: 200;
  }
  .item-image {
    min-width: 100px;
    max-width: 250px;
    max-height: 250px;
    margin-top: 10px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    width: 300px;
    height: 33px;
    font-size: 14px;
    line-height: 16px;

    &:hover {
      cursor: pointer;
      background-color: #7f6aee;
    }
  }
`;

const PostWrite = () => {
  return (
    <>
      <Title>게시글 작성</Title>

      <PostWriteContainer>
        <PostForm>
          <PostFormItem>
            <span className="item-name">제목*</span>
            <Hr />
            <textarea className="post-title" placeholder="제목을 입력해주세요." maxLength="26" />
            <Hr />
          </PostFormItem>

          <PostFormItem>
            <span className="item-name">내용*</span>
            <Hr />
            <textarea className="post-contents" placeholder="내용을 입력해주세요." />
            <Hr />
            <HelperText>* helper text</HelperText>
          </PostFormItem>
          <PostFormItem>
            <span className="item-name">이미지</span>
            <input type="file" name="post-image" accept="image/*" />
            <img className="item-image" alt="preview" />
          </PostFormItem>
        </PostForm>

        <BtnBox>
          <SubmitBtn>완료</SubmitBtn>
        </BtnBox>
      </PostWriteContainer>
    </>
  );
};

export default PostWrite;
