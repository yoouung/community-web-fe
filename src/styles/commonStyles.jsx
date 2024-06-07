import styled from "styled-components";

export const HelperText = styled.span`
  color: red;
  font-size: 11px;
  padding: 4px 5px;
  height: 20px;
  line-height: 15px;
`;

export const SubmitBtn = styled.button`
  background-color: #aca0eb;
  border-radius: 4px;
  border: none;
  color: white;
`;

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  display: none;
`;
