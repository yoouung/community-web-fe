import styled from "styled-components";

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  padding-top: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-weight: 500;
  line-height: 38px;
`;

export const InputForm = styled.form`
  margin: 15px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  .input-name {
    padding: 5px 0;
    font-size: 15px;
    font-weight: 500;
  }
  .input-wrapper {
    display: flex;
    flex-direction: row;
    height: 30px;
    margin: 0 5px;
  }
  .input {
    width: 100%;
    height: 25px;
  }
  .check-btn {
    margin-left: 5px;
    width: 80px;
    background-color: #aca0eb;
    color: white;
    border-radius: 10%;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: #7f6aee;
    }
  }
  .text {
    font-weight: 300;
    line-height: 16px;
    font-size: 14px;
  }

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    color: #4646468c;
  }
`;

export const ProfileImageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    color: #4646468c;
  }
  label {
    width: 140px;
    height: 140px;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    display: none;
  }
`;

export const AdditionalFunc = styled.span`
  margin-top: 10px;
  line-height: 16px;
  font-size: 12px;
  font-weight: 200;

  &:hover {
    cursor: pointer;
  }
`;
