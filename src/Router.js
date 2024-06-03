import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

import Home from "./pages";
import Post from "./pages/post/index";
import PostList from "./pages/post/postList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="posts" />} />
        </Route>

        <Route path="posts" element={<Post />}>
          <Route index element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
