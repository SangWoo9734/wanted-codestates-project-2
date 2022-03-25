import styled from "styled-components";

export const TypeChangeButtonWrapper = styled.div<{ active: boolean }>`
  position: relative;
  width: 50%;
  height: 40px;
  box-shadow: 0 0 10px 0 lightgray;

  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: ${({ active }) => (active ? "0" : "50%")};
    width: 50%;
    border-bottom: 3px solid #07f;
    transition: all 0.2s linear;
  }
`;
export const TypeChangeButton = styled.button<{ active: boolean }>`
  width: 50%;
  height: 100%;
  background: white;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ active }) => (active ? "#07f" : "lightgray")};
`;

export const MatchGraphTableWrapper = styled.ul<{ dataType: string }>`
  width: 100%;
  overflow: auto;
  background: white;
  box-shadow: 0 0 10px 0 lightgray;

  li {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 1.1rem;
  }
`;
export const MatchGraphTableHeader = styled.li`
  font-weight: bold;
  background: #e7e7e7;
`;
export const MatchGraphTableRow = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ active }) => (active ? "#0077ff40" : "none")};
`;

export const TableInnerWrapper = styled.div`
  height: 300px;
  overflow: auto;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowName = styled.div`
  padding: 0 5px;
  width: 120px;
  white-space: nowrap;
  margin: auto;

  p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
