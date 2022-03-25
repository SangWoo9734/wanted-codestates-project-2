import React, { useState } from "react";

import * as S from "./style";
import { AiOutlineArrowUp } from "react-icons/ai";

interface CommentType {
  name: string;
  comment: string;
}
function Comment() {
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [inputNickname, setInputNickname] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");

  return (
    <S.CommentWrapper>
      <S.InnerWrapper>
        <p>
          <span>응원</span>한마디
        </p>
        <p>전체 {commentList.length}개</p>
      </S.InnerWrapper>
      <S.MessageWrapper>
        {commentList &&
          commentList.map((comment, index) => {
            return (
              <S.MassageLog key={index}>
                <p>{comment.name}</p>
                <div>{comment.comment}</div>
              </S.MassageLog>
            );
          })}
      </S.MessageWrapper>
      <S.InnerWrapper>
        <S.NickNameInput
          type="text"
          placeholder="닉네임"
          className="nickName"
          value={inputNickname}
          onChange={(event) => setInputNickname(event.target.value)}
        />
        <S.CommentInput
          type="text"
          placeholder="최대 30자"
          className="comment"
          value={inputComment}
          onChange={(event) => setInputComment(event.target.value)}
        />
        <S.SaveComment
          onClick={() => {
            setCommentList([...commentList, { name: inputNickname, comment: inputComment }]);
            setInputNickname("");
            setInputComment("");
          }}
        >
          <AiOutlineArrowUp />
        </S.SaveComment>
      </S.InnerWrapper>
    </S.CommentWrapper>
  );
}

export default Comment;
