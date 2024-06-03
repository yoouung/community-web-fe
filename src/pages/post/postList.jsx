import React, { useEffect, useState } from "react";
import styled from "styled-components";
import postsData from "../../data/fakePosts.json";
import { PostPreview } from "../../components/postPreview";

const PostListContainer = styled.div`
  width: 600px;
  margin: 30px auto;
`;

const Description = styled.div`
  text-align: center;
  top: 10px;

  span {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
  }

  .bold {
    font-weight: 600;
    font-size: 20px;
    padding: 0 3px;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin: 20px 0 10px 0;

  button {
    width: 100px;
    height: 30px;
    background-color: #aca0eb;
    border-radius: 15px;
    border: none;
    color: white;

    &:hover {
      cursor: pointer;
      background-color: #7f6aee;
    }
  }
`;

const PostListWrapper = styled.section`
  width: 100%;
`;

// ========== JSX ==========

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    // TODO: get posts from server
    setPosts(postsData);
  }

  function onClick() {
    // TODO: update route
    window.location.href("/posts/write");
  }

  return (
    <PostListContainer>
      <Description>
        <span>안녕하세요,</span> <br />
        <span>아무 말 대잔치</span> <span className="bold">게시판</span>
        <span>입니다.</span>
      </Description>
      <BtnBox>
        <button onClick={onClick}>게시글 작성</button>
      </BtnBox>
      <PostListWrapper>
        {posts.map((post) => {
          return <PostPreview key={post.post_id} post={post} />;
        })}
      </PostListWrapper>
    </PostListContainer>
  );
};

export default PostList;
