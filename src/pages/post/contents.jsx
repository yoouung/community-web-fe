import React from "react";
import styled from "styled-components";
import sampleProfile from "../../images/sample/usersample2.jpg";
import samplePost from "../../images/sample/samplepost1.jpg";
import MenuBtnBox from "../../components/menuBtnBox";
import Comment from "../../components/comment";
import { ModalBackdrop } from "../../styles/commonStyles";
import MenuModal from "../../components/menuModal";

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #00000029;
  border: none;
`;

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostOverview = styled.div`
  padding: 15px 0;
  width: 100%;

  .post-overview-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 30px;
`;

const PostWriter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;

  image {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const PostContent = styled.div`
  padding: 0 15px;

  .post-image {
    width: 100%;
    height: 300px;
    margin: 20px 0;
    display: flex;
    align-items: center;
  }

  .post-text {
    display: block;
    line-height: 25px;
    font-size: 15px;
  }
`;

const PostStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 230px;
  justify-content: space-between;
  justify-self: center;
  margin: 40px 0;
`;

const PostStatsItem = styled.div`
  background-color: #d9d9d9;
  border-radius: 16px;
  width: 110px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 0;

  .num {
    font-size: 18px;
    font-weight: 700;
  }

  .item-name {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentsNew = styled.div`
  background-color: #fff;
  width: 100%;
  height: 165px;
  border-radius: 16px;

  .input-container {
    border-radius: 16px;
    height: 100px;
    padding: 20px 20px 10px 20px;
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
  }
  textarea {
    border-radius: 16px;
    border: none;
    line-height: 21px;
    width: 100%;
    height: 100%;
    resize: none;

    &:focus {
      outline: none;
    }
  }
  .submit-btn {
    width: 130px;
    height: 35px;
    background-color: #aca0eb;
    color: #fff;
    border: none;
    border-radius: 16px;
    margin-right: 10px;
  }
`;

const CommentsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  align-items: center;
`;

const Contents = () => {
  const postContents = `이미지까지 수정\r\n\r\n1. (입문자를 위한) 미니퀘스트\r\n교재에 있는 미니퀘스트 모두  해보기,\r\n문제에 대한 답이나 직접적인 해결책은 검색하거나 GPT 활용 금지, 문법이나 사용법  등은 검색 가능\r\n\r\n2. (공통과제) 프론트엔드 JS 코드 작성하여 바닐라로 커뮤니티  완료해오기\r\n2-1. Event부터 적용해보기\r\n2-2. Fetch 적용해보기\r\n2-1, 2-2 순서 꼭 잘  지키기\r\n백엔드 코드 작성 금지\r\nFetch에서 json파일 호출하는 방법으로 구현\r\n\r\n3.  (중급자를 위한) express를 이용하여 서버 구현 (route-controller-model)\r\n- model은  DB연결이 아닌 JSON 더미 데이터로 진행\r\n**백엔드 서버 분리해야합니다!!\r\n기존 express 와  달리 새로운 express 만들어야함.`;

  const comments = [
    {
      comment_id: 1,
      content: "새로운 댓글 달고 갑니다~",
      user_id: 3,
      created_at: "2024-05-12 23:22",
      updated_at: null,
    },
    {
      comment_id: 2,
      content: "새로운 댓글 달고 갑니다~",
      user_id: 3,
      created_at: "2024-05-12 23:22",
      updated_at: null,
    },
    {
      comment_id: 3,
      content: "새로운 댓글 달고 갑니다~",
      user_id: 3,
      created_at: "2024-05-12 23:22",
      updated_at: null,
    },
  ];

  return (
    <PostContainer>
      <ModalBackdrop />

      {/* POST CONTENTS */}
      <PostOverview>
        <Title>게시글 제목</Title>
        <div className="post-overview-info">
          <PostWriter>
            <image alt="user" src={sampleProfile} />
            <span style={{ fontWeight: "500" }}>사용자이름</span>
            <span style={{ marginLeft: "20px", fontSize: "14px" }}></span>
          </PostWriter>
          <MenuBtnBox />
        </div>
      </PostOverview>

      <Hr />

      <PostContent>
        <div className="post-image">
          <image className="post-image" src={samplePost} alt="image" />
        </div>
        <div className="post-text" id="post-text">
          {postContents}
        </div>
      </PostContent>

      <PostStats>
        <PostStatsItem>
          <span className="num">13</span>
          <span className="item-name">조회수</span>
        </PostStatsItem>
        <PostStatsItem>
          <span className="num">2</span>
          <span className="item-name">댓글</span>
        </PostStatsItem>
      </PostStats>

      {/* COMMENTS */}
      <CommentsWrapper>
        <CommentsNew>
          <div className="input-container">
            <textarea type="text" placeholder="댓글을 남겨주세요!"></textarea>
          </div>
          <Hr />
          <div className="btn-container">
            <button className="submit-btn">댓글 등록</button>
          </div>
        </CommentsNew>

        <CommentsListContainer>
          {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </CommentsListContainer>
      </CommentsWrapper>

      {/* MODAL */}
      <MenuModal
        category="post-delete"
        message="게시글을 삭제하시겠습니까?"
        contents="삭제한 게시글은 복구할 수 없습니다."
      />
      <MenuModal
        category="comment-delete"
        message="댓글을 삭제하시겠습니까?"
        contents="삭제한 내용은 복구할 수 없습니다."
      />
    </PostContainer>
  );
};

export default Contents;
