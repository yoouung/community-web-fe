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

const PostUpdateContainer = styled.section`
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

const PostUpdate = () => {
  const postTitle = `게시글 제목`;
  const postContents = `이미지까지 수정\r\n\r\n1. (입문자를 위한) 미니퀘스트\r\n교재에 있는 미니퀘스트 모두  해보기,\r\n문제에 대한 답이나 직접적인 해결책은 검색하거나 GPT 활용 금지, 문법이나 사용법  등은 검색 가능\r\n\r\n2. (공통과제) 프론트엔드 JS 코드 작성하여 바닐라로 커뮤니티  완료해오기\r\n2-1. Event부터 적용해보기\r\n2-2. Fetch 적용해보기\r\n2-1, 2-2 순서 꼭 잘  지키기\r\n백엔드 코드 작성 금지\r\nFetch에서 json파일 호출하는 방법으로 구현\r\n\r\n3.  (중급자를 위한) express를 이용하여 서버 구현 (route-controller-model)\r\n- model은  DB연결이 아닌 JSON 더미 데이터로 진행\r\n**백엔드 서버 분리해야합니다!!\r\n기존 express 와  달리 새로운 express 만들어야함.`;

  return (
    <>
      <Title>게시글 수정</Title>

      <PostUpdateContainer>
        <PostForm>
          <PostFormItem>
            <span className="item-name">제목*</span>
            <Hr />
            <textarea className="post-title" placeholder="제목을 입력해주세요." maxLength="26">
              {postTitle}
            </textarea>
            <Hr />
          </PostFormItem>

          <PostFormItem>
            <span className="item-name">내용*</span>
            <Hr />
            <textarea className="post-contents" placeholder="내용을 입력해주세요.">
              {postContents}
            </textarea>
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
      </PostUpdateContainer>
    </>
  );
};

export default PostUpdate;
