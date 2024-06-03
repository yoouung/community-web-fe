import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

import Home from "./pages";
import PostList from "./pages/post/postList";
import SignIn from "./pages/user/signIn";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="posts" />} />

          <Route path="signin" element={<SignIn />} />

          <Route path="posts">
            <Route index element={<PostList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
