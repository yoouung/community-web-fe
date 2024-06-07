import React from "react";
import styled from "styled-components";
import sampleProfile from "../images/sample/usersample2.jpg";
import MenuBtnBox from "./menuBtnBox";

const CommentContainer = styled.div`
  width: 540px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  .writer-info {
    display: flex;
    align-items: center;

    .userimage {
      width: 33px;
      height: 33px;
      margin-right: 10px;
      border-radius: 50%;
    }
    .nickname {
      font-weight: 800;
    }
    .date {
      margin-left: 20px;
      font-size: 14px;
    }
  }
  .comment-contents {
    padding-left: 45px;
    font-size: 14px;
  }
`;

const Comment = ({ comment }) => {
  return (
    <CommentContainer>
      <CommentInfo>
        <div className="writer-info">
          <image className="userimage" src={sampleProfile} alt="user" />
          <span className="writer">닉네임</span>
          <span className="date">{comment.created_at}</span>
        </div>
        <span className="comment-contents">{comment.content}</span>
      </CommentInfo>

      <MenuBtnBox />
    </CommentContainer>
  );
};

export default Comment;
