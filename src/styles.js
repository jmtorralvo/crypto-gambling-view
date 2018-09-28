import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 960px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Header = styled.div`
  background: #50E3C2;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  padding: 40px 0;
  background: #1E2C35;
  height: 100px;
`;

export const Title = styled.div`
  color: white;
  font-family: 'Muli';
`;

export const ShareTitle = styled.span`
  color: white;
  font-family: 'Muli';
`;

export const Button = styled.a`
  background: #50E3C2;
  color: white;
  justify-content: left;
  display: block;
  text-transform: uppercase;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 14px;
  width: 150px;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Muli';
`;