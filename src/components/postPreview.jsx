import React from "react";
import styled from "styled-components";
import ChangeCount from "../utils/changeCount";
import profile from "../images/sample/usersample1.jpg";

const Post = styled.div`
  padding: 15px 0;
  width: 100%;
  height: 150px;
  box-shadow: 3px 4px 4px 0px #cccccc40;
  margin-bottom: 8px;
  border-radius: 16px;
  background-color: #fff;
`;

const PostInfo = styled.div`
  padding: 0 15px;

  .post-info-detail {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 13px;
    font-weight: 300;
  }
`;

const PostTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    cursor: pointer;
  }
`;

const PostWriter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-weight: 300;

  .userimage {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const PostPreview = ({ post }) => {
  return (
    <Post key={post.post_id}>
      <PostInfo>
        <PostTitle>{post.title}</PostTitle>
        <div className="post-info-detail">
          <span className="stats">
            좋아요 {""} {post.likes} {""}
            댓글 {""} {ChangeCount(post.comments)} {""}
            조회수 {ChangeCount(post.hits)}
          </span>
          <span className="date">{post.created_at}</span>
        </div>
      </PostInfo>{" "}
      <hr style={{ margin: "16px" }} />
      <PostWriter>
        {/* TODO: update src after connecting server */}
        <img className="userimage" src={profile} alt="user" />
        <span className="writer">{post.nickname}</span>
      </PostWriter>
    </Post>
  );
};
