import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #edf0f2;
`;

export const SideBar = styled.div`
  width: 300px;
  height: 100%;
`;

export const AppBody = styled.div`
  width: 100%;
  padding: 16px;
  overflow-y: scroll;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0 2px 9px rgba(19, 41, 63, 0.2);
  background-color: white;
`;

export const AppLogo = styled.img`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;
