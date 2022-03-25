import styled from "styled-components";

export const NavigationWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
`;

export const TopNavigation = styled.div`
  background: white;

  & > div {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
`;
export const TopInnerWrapper = styled.div`
  justify-content: space-between;
  width: 100%;
  background: white;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  svg {
    margin: 0 10px;
    color: gray;
    font-weight: 900;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const LinkToNexon = styled.div`
  font-size: 1.3rem;
`;

export const BottomNavigation = styled.div<{ needBackground: boolean }>`
  background: ${({ needBackground }) => (needBackground ? "none" : "#005fcc")};
`;

export const BottomInnerWrapper = styled.ul`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.li`
  position: relative;
  width: 80px;
  height: 50px;
  line-height: 50px;
  margin: 0 10px;
  font-size: 1.5rem;
  color: #ffffff80;
  text-align: center;
  transition: all 0.2s linear;

  &::after {
    position: absolute;
    display: block;
    content: " ";
    bottom: 0;
    margin: 0 auto;
    width: 0%;
    border-bottom: 4px solid #fff;
    transition: all 0.2s linear;
  }

  &:hover {
    color: #ffffff;
    ::after {
      width: 100%;
    }
  }
`;
