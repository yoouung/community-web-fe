import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/header";

const Post = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Post;
