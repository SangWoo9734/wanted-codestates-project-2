import styled from "styled-components";

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 lightgray;
`;
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  font-size: 1.3rem;

  p {
    span {
      color: #07f;
    }
  }
  input {
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 0 5px;

    &:focus {
      outline: none;
    }
  }
`;

export const NickNameInput = styled.input`
  width: 20%;
`;

export const CommentInput = styled.input`
  width: calc(80% - 30px);
`;

export const SaveComment = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: 2px solid #07f;
  color: #07f;
  /* border: 1px solid ${({ disabled }) => (disabled ? "lightgray" : "#07f")};
  color: ${({ disabled }) => (disabled ? "lightgray" : "#07f")}; */
  background: white;

  &:hover {
    background: #07f;
    color: white;
    /* background: ${({ disabled }) => (disabled ? "white" : "#07f")};
    color: ${({ disabled }) => (disabled ? "lightgray" : "white")}; */
  }
`;
export const MessageWrapper = styled.div`
  height: calc(100% - 80px);
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  overflow: auto;
`;

export const MassageLog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-size: 1.3rem;

  div {
    width: 80%;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
  }

  p {
    width: 20%;
    color: #07f;
    text-align: center;
  }
`;
