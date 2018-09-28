import styled from 'styled-components';

export const Timer = styled.span`
  color: red;
  font-size: 40px;
`;

export const UsersList = styled.div`
  width: 300px;
  background: #1E2C35;
  height: 660px;
  position: absolute;
  top: 50px;
`;

export const UserContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom-color: white; 
  border-bottom-width: 1px; 
  border-bottom-style: solid; 
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  margin-right: 20px;
`;

export const UserName = styled.span`
  font-size: 18px;
  color: white;
`;

export const MainTitle = styled.h2`
  color: #1E2C35;
  text-align: left;
`;

export const MainStageContainer = styled.div`
  padding-top: 30px;
  // padding-left: 350px;
  margin: 0 auto;
  width: 960px;
`;

export const Room = styled.img`
  width: 100px;
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
`;