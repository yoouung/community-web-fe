import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

import Home from "./pages";
import PostList from "./pages/post/postList";
import SignIn from "./pages/user/signIn";
import SignUp from "./pages/user/signUp";
import UpdateInfo from "./pages/user/updateInfo";
import UpdatePwd from "./pages/user/updatePwd";
import Contents from "./pages/post/contents";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="posts" />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="users">
            <Route path="update-info" element={<UpdateInfo />} />
            <Route path="update-pwd" element={<UpdatePwd />} />
          </Route>

          <Route path="posts">
            <Route index element={<PostList />} />
            <Route path="contents" element={<Contents />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
