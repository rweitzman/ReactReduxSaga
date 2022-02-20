import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100%;
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

export const HomeButton = styled.button`
  width: 86%;
  height: 60px;
  margin-left: 16px;
  background-color: white;
  border: 0
`;

export const HomeHeader = styled.div`
  width: 100%;
  height: 60px;
  font-size: 3.2em;
  margin-left: 16px;
  display:inline-block;
  text-align:center;
  color: black;
`
export const CustomCard = styled.div` 
margin: 16px;
width: 325px;
`