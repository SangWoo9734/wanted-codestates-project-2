import React from "react";

import { RiTeamFill, RiUser3Fill } from "react-icons/ri";
import { IoMdRefresh, IoIosNotifications, IoMdShare } from "react-icons/io";
import { UserType } from "../../../api/type";

import * as S from "./style";
import { MostCount } from "../../../modules/userMost";

interface Props {
  user: UserType;
  mostKart: MostCount[];
  mostCharacter: string;
  matchType: string;
  setMatchType: React.Dispatch<React.SetStateAction<string>>;
}

function User({ user, mostKart, mostCharacter, matchType, setMatchType }: Props) {
  const userReaction = [
    { title: "전적갱신", icon: <IoMdRefresh /> },
    { title: "신고하기", icon: <IoIosNotifications /> },
    { title: "공유하기", icon: <IoMdShare /> },
  ];
  return (
    <S.UserWrapper>
      <S.UserImages>
        <img
          src={
            mostCharacter &&
            `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${mostCharacter}.png`
          }
          alt="UserCharacter"
        />
      </S.UserImages>
      <S.UserDetail>
        <S.UserDetailInnerWrapper>
          <S.UserInfo>
            <S.UserLevel>LV. {user.level}</S.UserLevel>
            <S.UserName>{user.name}</S.UserName>
          </S.UserInfo>
          <S.UserKart>
            <p>최애 카트바디 Top3</p>
            <S.UserMostKart>
              {mostKart &&
                mostKart.slice(0, 3).map((kartBody, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${
                          kartBody.kart as string
                        }.png`}
                        alt=""
                      />
                    </div>
                  );
                })}
            </S.UserMostKart>
          </S.UserKart>
        </S.UserDetailInnerWrapper>
        <S.UserMatch>
          <S.MatchType>
            <S.MatchTypeBtn
              active={matchType === "개인"}
              onClick={() => {
                setMatchType("개인");
              }}
            >
              <RiUser3Fill />
              <p>개인전</p>
            </S.MatchTypeBtn>
            <S.MatchTypeBtn
              active={matchType === "팀"}
              onClick={() => {
                setMatchType("팀");
              }}
            >
              <RiTeamFill />
              <p>팀전</p>
            </S.MatchTypeBtn>
          </S.MatchType>
          <S.UserReaction>
            {userReaction.map((reaction, index) => {
              return (
                <S.ReactionBtn key={index}>
                  {reaction.icon}
                  <p>{reaction.title}</p>
                </S.ReactionBtn>
              );
            })}
          </S.UserReaction>
        </S.UserMatch>
      </S.UserDetail>
    </S.UserWrapper>
  );
}

export default User;
