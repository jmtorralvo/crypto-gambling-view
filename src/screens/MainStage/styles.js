import styled from 'styled-components';

export const Timer = styled.span`
  color: red;
  font-size: 40px;
`;

export const NegativeDeviation = styled.span`
  color: red;
  flex: 1;
`;

export const CoinContainer = styled.span`
  display: flex;
  margin-bottom: 10px;
`;

export const PositiveDeviation = styled.span`
  color: green;
  flex: 1;
`;

export const CoinColumn = styled.span`
  flex: 1;
`;

export const Bold = styled.span`
  font-weight: 800;
  font-size: 16px;
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
  text-align: center;
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

export const CryptoContainer = styled.div`
display: inline-block;
width: 200px;
height: 200px;
margin-right: 20px;
cursor: pointer;
`;

export const CoinName = styled.div`
font-size: 14px;
text-align: left;
margin-bottom: 10px;
`;

export const SpinnerWrapper = styled.div`
heigh: 1000px;
width: 1000px;
@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}
`;

export const SpinnerContainer = styled.div`
heigh: 1000px;
width: 100%;
background-color:rgba(0,0,0,0.5);
`;

export const WinImgWrapper = styled.div`
  margin-bottom: 60px;
`
export const BtnAgain = styled.div`
  margin-bottom: 60px;
`

export const graphWrapper = styled.div`
margin: auto;
width: 100%;
`