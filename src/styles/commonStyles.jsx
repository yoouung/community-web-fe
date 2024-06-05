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

export const Modal = styled.div`
  display: flex;
  width: 340px;
  border-radius: 12px;
  background-color: #fff;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  position: fixed;
  z-index: 10;

  .modal-title {
    font-size: 18px;
    font-weight: bolder;
    line-height: 28px;
    margin-bottom: 10px;
  }

  .modal-contents {
    span {
      font-size: 15px;
      font-weight: 300;
      line-height: 24px;
    }
    .modal-btn-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 30px;

      .modal-btn {
        width: 95px;
        height: 33px;
        border-radius: 12px;
        border: none;

        font-size: 15px;
        font-weight: 200;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  display: none;
`;
