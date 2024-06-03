import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 80px;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Home;
